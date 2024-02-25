function EncodeHTMLForm(data) {
    var params = [];
    for (var name in data) {
        var value = data[name];
        var param = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        params.push(param);
    }
    return params.join('&').replace(/%20/g, '+');
}

const content = document.getElementById("content");
const sendButton = document.getElementById("send-button");
const selectFileButton = document.getElementById("select-file-button");
const selectFileButtonPre = document.getElementById("select-file-button-pre");
const rightClickDelete = document.getElementById("right-click-delete");
const rightClickDeleteFile = document.getElementById("right-click-delete-file");
const rightClickCopy = document.getElementById("right-click-copy");
const rightClickDownloadFile = document.getElementById("right-click-download-file");
const contextmenuFile = document.getElementById('contextmenu-file');
const fileListWrap = document.getElementById('file-list-wrap');
const dataListWrap = document.getElementById('data-list-wrap');
const fileListTitle = document.getElementById('file-list-title');
const dataListTitle = document.getElementById('data-list-title');

let rightClickTargetId = "";
let fileTarget;
let data = [];

const refresh = () => {
    if(data == null) return;
    const dataList = document.getElementById("data-list");
    dataList.innerHTML = "";
    dataListWrap.style.display = data.length == 0 ? "none" : "block";
    for(const text of data){
        const div = document.createElement("div");
        div.innerText = text['content'];
        div.className = "message";
        div.id = text['uuid'];
        dataList.prepend(div);

        const contextmenu = document.getElementById('contextmenu');
        div.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            contextmenu.style.left = e.pageX + 'px';
            contextmenu.style.top = e.pageY + 'px';
            contextmenu.style.display = 'block';
            rightClickTargetId = e.target.id
        });
        div.addEventListener('click', () => {
            contextmenu.style.display = 'none';
        });
    }
}

const send = (write) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    write ? xhr.send(EncodeHTMLForm({ "data": content.value })) : xhr.send(EncodeHTMLForm({ "data": "" }));
    if(write && content.value != ""){
        const dataList = document.getElementById("data-list");
        const div = document.createElement("div");
        div.innerText = content.value;
        div.className = "message";
        dataList.prepend(div);
    }
    xhr.onreadystatechange = () => {
        let texts = JSON.parse(xhr.responseText || "null");
        if(texts == null) return;
        data = texts;
        refresh();
        sendButton.disabled = false;
        sendButton.classList.remove("disabled")
    }
}

const i18n = () => {
    const lang = window.navigator.language;
    if(lang == 'ja' || lang == 'ja-JP'){
        content.placeholder = "テキストを入力...";
        sendButton.value = "送信";
        rightClickDelete.innerText = "削除";
        rightClickDeleteFile.innerText = "削除";
        rightClickDownloadFile.innerText = "ダウンロード";
        rightClickCopy.innerText = "コピー";
        selectFileButton.value = "ファイルを選択";
        fileListTitle.innerText = "ファイル一覧";
        dataListTitle.innerText = "テキスト一覧";
    }
}

rightClickCopy.addEventListener('click', () => {
    const targetDOM = document.getElementById(rightClickTargetId);
    navigator.clipboard.writeText(targetDOM.textContent);
    contextmenu.style.display = 'none';
});

rightClickDelete.addEventListener('click', () => {
    const targetDOM = document.getElementById(rightClickTargetId);
    targetDOM.remove();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    xhr.send(EncodeHTMLForm({"delete": rightClickTargetId}));
    xhr.onreadystatechange = () => {
        let texts = JSON.parse(xhr.responseText || "null");
        if(texts == null) return;
        if(texts["status"] == "OK"){
            send(false);
        }
    };
    contextmenu.style.display = 'none';
});

document.body.addEventListener('click', () => {
    contextmenu.style.display = 'none';
    contextmenuFile.style.display = 'none';
});

sendButton.addEventListener("click", () => {
    if(content.value != ""){
        sendButton.disabled = true;
        sendButton.classList.add("disabled")
        send(true)
    }    
});

selectFileButton.addEventListener('click', () => {
    selectFileButtonPre.click();
});

selectFileButtonPre.addEventListener('change', (e) => {
    const form = document.getElementById("upload-form");
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    xhr.upload.addEventListener('loadstart', () => {
        console.log("Upload: start")
    });

    xhr.upload.addEventListener('load', () => {
        // アップロード正常終了
        console.log('Upload: done');
        getFiles();
    });

    xhr.send(formData);
});

const getFiles = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    xhr.send(EncodeHTMLForm({ "files": "" }));
    xhr.onreadystatechange = () => {
        let texts = JSON.parse(xhr.responseText || "null");
        if (texts == null)
            return;

        const fileListUl = document.getElementById('file-list-ul');
        fileListUl.innerHTML = "";

        const fileList = document.getElementById('file-list');
        fileList.style.display = texts.length == 0 ? "none" : "block";
        fileListWrap.style.display = texts.length == 0 ? "none" : "block";

        for(const fileName of texts){
            const div = document.createElement('li');
            div.textContent = fileName;
            
            div.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                contextmenuFile.style.left = e.pageX + 'px';
                contextmenuFile.style.top = e.pageY + 'px';
                contextmenuFile.style.display = 'block';
                fileTarget = e.target;
            });
            div.addEventListener('click', () => {
                contextmenuFile.style.display = 'none';
                location.href = `/get?filename=${fileName}`
            });

            fileListUl.append(div);
        }
    };
};

rightClickDeleteFile.addEventListener("click", () => {
    const fileName = fileTarget.textContent;
    fileTarget.remove();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    xhr.send(EncodeHTMLForm({ "removefile": fileName }));
    xhr.onreadystatechange = () => {
        getFiles();
    };
})

i18n();
send(false);
getFiles();
