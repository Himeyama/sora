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
const rightClickDelete = document.getElementById("right-click-delete");
let rightClickTargetId = "";
let data = [];

const refresh = () => {
    if(data == null) return;
    const dataList = document.getElementById("data-list");
    dataList.innerHTML = "";
    for(const text of data){
        const div = document.createElement("div");
        div.innerText = text['content'];
        div.className = "message";
        div.id = text['uuid'];
        dataList.prepend(div);

        const contextmenu = document.getElementById('contextmenu');
        const main = div;
        main.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            contextmenu.style.left = e.pageX + 'px';
            contextmenu.style.top = e.pageY + 'px';
            contextmenu.style.display = 'block';
            rightClickTargetId = e.target.id
        });
        main.addEventListener('click', () => {
            contextmenu.style.display = 'none';
        });
    }
}

const send = (write) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cgi-bin");
    write ? xhr.send(EncodeHTMLForm({ "data": content.value })) : xhr.send(EncodeHTMLForm({ "data": "" }));
    xhr.onreadystatechange = () => {
        let texts = JSON.parse(xhr.responseText || "null");
        if(texts == null) return;
        data = texts;
        refresh();
    }
}

const i18n = () => {
    const lang = window.navigator.language;
    if(lang == 'ja'){
        content.placeholder = "テキストを入力...";
        sendButton.value = "送信";
        rightClickDelete.innerText = "削除"
    }
}

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

i18n();
send(false);
sendButton.addEventListener("click", () => { send(true) });
