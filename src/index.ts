require('./style.css')
import { fluentProgress, fluentListbox, fluentOption, fluentButton, fluentCard, fluentTextField, fluentSwitch, provideFluentDesignSystem, Listbox, TextArea, Button } from '@fluentui/web-components'
import i18next from 'i18next'

provideFluentDesignSystem()
    .register(
        fluentProgress(),
        fluentListbox(),
        fluentOption(),
        fluentButton(),
        fluentCard(),
        fluentTextField(),
        fluentSwitch()
    )

const setAttribute = (id: string) => {
    const element = document.getElementById(id)
    if(element != null) element.setAttribute("placeholder", i18next.t(id))
}

const setText = (id: string) => {
    const element = document.getElementById(id)
    if(element != null) element.textContent = i18next.t(id)
}

i18next.init({
    lng: 'ja', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            translation: {
                "title-sora": "sora",
                "input-text": "Input text...",
                "select-file": "Select a file...",
                "send-data": "Send",
                "remove-file": "Remove a file",
                "remove-text": "Remove a text",
                "copy-text": "Copy a text",
                "open-file": "Open a file",
                "download-file": "Download a file"
            }
        },
        ja: {
            translation: {
                "title-sora": "ソラ",
                "input-text": "テキストを入力...",
                "select-file": "ファイルの選択",
                "send-data": "送信",
                "remove-file": "ファイルの削除",
                "remove-text": "テキストの削除",
                "copy-text": "テキストのコピー",
                "open-file": "ファイルを開く",
                "download-file": "ファイルのダウンロード"
            }
        }
    }
}, () => {
    setText("title-sora")
    setAttribute("input-text")
    setText("select-file")
    setText("send-data")
    setText("remove-file")
    setText("remove-text")
    setText("copy-text")
    setText("open-file")
    setText("download-file")
})

const progress = (isOn: boolean) => {
    const progressBar = document.getElementById("progress")
    if(isOn)
        progressBar.classList.remove("hidden-progress")
    else
        progressBar.classList.add("hidden-progress")
}

// 与えられたオブジェクトのキーと値をエンコードして、HTMLフォームのクエリ文字列として連結
const encodeHTMLForm = (data: Record<string, string>) => {
    const params: string[] = []
    for (const name in data) {
        const value = data[name]
        const param = encodeURIComponent(name) + '=' + encodeURIComponent(value)
        params.push(param)
    }
    return params.join('&').replace(/%20/g, '+')
}

const getFiles = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/cgi-bin")
    xhr.send(encodeHTMLForm({ "files": "" }))
    xhr.onreadystatechange = () => {
        let texts = JSON.parse(xhr.responseText || "null")
        if (texts == null)
            return

        // const fileListUl = document.getElementById('file-list-ul')
        // fileListUl.innerHTML = ""

        // const fileList = document.getElementById('file-list')
        // fileList.style.display = texts.length == 0 ? "none" : "block"
        // fileListWrap.style.display = texts.length == 0 ? "none" : "block"

        for(const fileName of texts){
            const div = document.createElement('li')
            div.textContent = fileName
            
            div.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                contextmenuFile.style.left = e.pageX + 'px'
                contextmenuFile.style.top = e.pageY + 'px'
                contextmenuFile.style.display = 'block'
                fileTarget = e.target
            })
            div.addEventListener('click', () => {
                contextmenuFile.style.display = 'none'
                location.href = `/get?filename=${fileName}`
            })

            // fileListUl.append(div)
        }
    }
}

// ファイルアップロード
const selectFileButtonPre = document.getElementById("select-file-button-pre")
const selectFile = document.getElementById("select-file")
if(selectFile != null && selectFileButtonPre != null){
    selectFile.addEventListener("click", () => selectFileButtonPre.click())
    selectFileButtonPre.addEventListener("change", () => {
        const form: HTMLFormElement = document.getElementById("upload-form") as HTMLFormElement
        const formData: FormData = new FormData(form)
        
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "/cgi-bin")
        xhr.upload.addEventListener('loadstart', () => {
            console.log("Upload: start")
        })

        xhr.upload.addEventListener('load', () => {
            // アップロード正常終了
            console.log('Upload: done')
            getFiles()
            refresh()
        })

        progress(true)
        xhr.send(formData)
    })
}

// 子要素を削除
const removeChild = (element: HTMLElement) => {
    const children: HTMLCollection = element.children
    for(const child of Array.from(children)){
        child.remove()
    }
}

// リストを更新
const showList = (data: any, files: string[]) => {
    const contents = document.getElementById("contents")
    removeChild(contents)

    // テキスト一覧を追加
    for (const content of data) {
        const text = content.content
        const uuid = content.uuid

        const fluentOpt = document.createElement("fluent-option")
        fluentOpt.textContent = text
        fluentOpt.setAttribute("value", uuid)
        fluentOpt.setAttribute("type", "text")

        fluentOpt.addEventListener("click", () => {
            const items = document.getElementById("items")
            items.classList.add("visible")
            items.classList.remove("type-file")
            items.classList.add("type-text")

            const textData = document.getElementById("text-title")
            textData.textContent = fluentOpt.textContent

            const textContent = document.getElementById("text-content")
            textContent.textContent = fluentOpt.textContent
        })

        contents.appendChild(fluentOpt)
    }

    // ファイル一覧を追加
    for (const text of files){
        const fluentOpt = document.createElement("fluent-option")
        fluentOpt.textContent = text
        fluentOpt.setAttribute("type", "file")

        fluentOpt.addEventListener("click", () => {
            const items = document.getElementById("items")
            items.classList.add("visible")
            items.classList.add("type-file")
            items.classList.remove("type-text")

            const textData = document.getElementById("file-title")
            textData.textContent = fluentOpt.textContent
        })
        contents.appendChild(fluentOpt)
    }
}

const refresh = (visibleDetails: boolean = false) => {
    // 一覧を表示
    fetch('/cgi-bin?data=')
        .then((response) => response.json())
        .then((data) => {
            // showList(data)
            fetch('/cgi-bin?files')
                .then((response) => response.json())
                .then((files) => {
                    showList(data, files)
                    progress(false)
                    if(visibleDetails) {
                        const items = document.getElementById("items")
                        items.classList.remove("visible")
                    }
                }
            )
        }
    )
}

refresh()

// データ送信
document.getElementById("send-data").addEventListener("click", () => {
    progress(true)
    const text: string = (document.getElementById("input-text") as HTMLInputElement).value
    fetch('/cgi-bin?data=' + encodeURI(text))
        .then((response) => response.json())
        .then((data) => {
            // showList(data)
            fetch('/cgi-bin?files')
                .then((response) => response.json())
                .then((files) => {
                    showList(data, files)
                    progress(false)
                }
            )
        }
    )
})

/* テキストのコピーがクリックされたとき */
const copyText = document.getElementById("copy-text") as Button
copyText.addEventListener("click", () => {
    const contents = document.getElementById("contents") as Listbox
    if(contents.selectedIndex != -1){
        // console.log(contents)
        const selected = contents.selectedOptions[0]
        selected.textContent

        const textarea: HTMLTextAreaElement = document.createElement("textarea")
        textarea.value = selected.textContent
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
    }
})

/* テキストの削除がクリックされたとき */
const removeText = document.getElementById("remove-text") as Button
removeText.addEventListener("click", () => {
    progress(true)
    const contents = document.getElementById("contents") as Listbox
    let uuid: string
    if(contents.selectedIndex != -1){
        const selected = contents.selectedOptions[0]
        uuid = selected.value
    }else{
        return
    }

    fetch('/cgi-bin?delete=' + uuid)
        .then((response) => response.json())
        .then((_data) => {
            refresh(true)
        }
    )
})

/* ファイルの削除がクリックされたとき */
const removeFile = document.getElementById("remove-file") as Button
removeFile.addEventListener("click", () => {
    progress(true)
    const contents = document.getElementById("contents") as Listbox
    let fileName: string
    if(contents.selectedIndex != -1){
        const selected = contents.selectedOptions[0]
        fileName = selected.textContent
    }else{
        return
    }

    fetch('/cgi-bin?removefile=' + fileName)
        .then((response) => response.json())
        .then((_data) => {
            refresh(true)
        }
    )
    refresh()
})

const downloadFile = (url: string, filename: string): void => {
    "use strict"

    // XMLHttpRequestオブジェクトを作成する
    const xhr: XMLHttpRequest = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.responseType = "blob" // Blobオブジェクトとしてダウンロードする
    xhr.onload = (): void => {
        // ダウンロード完了後の処理を定義する
        const blob: Blob = xhr.response
        // Blobオブジェクトを指すURLオブジェクトを作る
        const objectURL: string = window.URL.createObjectURL(blob)
        // リンク（<a>要素）を生成し、JavaScriptからクリックする
        const link: HTMLAnchorElement = document.createElement("a")
        document.body.appendChild(link)
        link.href = objectURL
        link.download = filename
        link.click()
        document.body.removeChild(link)
    }
    // XMLHttpRequestオブジェクトの通信を開始する
    xhr.send()
}

/* ファイルを開く */
const openFile = document.getElementById("open-file") as Button
openFile.addEventListener("click", () => {
    const contents = document.getElementById("contents") as Listbox
    let fileName: string
    if(contents.selectedIndex != -1){
        const selected = contents.selectedOptions[0]
        fileName = selected.textContent
        window.open(`/get?filename=${fileName}`, '_blank')
    }else{
        return
    }
})

/* ファイルをダウンロード */
const downloadFileE = document.getElementById("download-file") as Button
downloadFileE.addEventListener("click", () => {
    const contents = document.getElementById("contents") as Listbox
    let fileName: string
    if(contents.selectedIndex != -1){
        const selected = contents.selectedOptions[0]
        fileName = selected.textContent
        downloadFile(`/get?filename=${fileName}`, fileName)
    }else{
        return
    }
})

