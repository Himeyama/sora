require('./style.css')
import { fluentListbox, fluentOption, fluentButton, fluentCard, fluentTextField, fluentSwitch, provideFluentDesignSystem } from '@fluentui/web-components'
import i18next from 'i18next'

provideFluentDesignSystem()
    .register(
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
                "send-data": "Send"
            }
        },
        ja: {
            translation: {
                "title-sora": "ソラ",
                "input-text": "テキストを入力...",
                "select-file": "ファイルの選択",
                "send-data": "送信"
            }
        }
    }
}, () => {
    setText("title-sora")
    setAttribute("input-text")
    setText("select-file")
    setText("send-data")
})

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
        })

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
const showList = (data: any) => {
    const contents = document.getElementById("contents")
    removeChild(contents)

    // レスポンスを処理するコードをここに記述
    for (const content of data) {
        const text = content.content
        const uuid = content.uuid

        const fluentOpt = document.createElement("fluent-option")
        fluentOpt.textContent = text
        fluentOpt.setAttribute("value", uuid)

        fluentOpt.addEventListener("click", () => {
            const items = document.getElementById("items")
            items.classList.add("visible")
        })

        contents.appendChild(fluentOpt)
    }
}

// 一覧を表示
fetch('/cgi-bin?data=')
    .then((response) => response.json())
    .then((data) => {
        showList(data)
    }
)

// データ送信
document.getElementById("send-data").addEventListener("click", () => {
    const text: string = (document.getElementById("input-text") as HTMLInputElement).value;
    fetch('/cgi-bin?data=' + encodeURI(text))
        .then((response) => response.json())
        .then((data) => {
            showList(data)
        }
    )
})