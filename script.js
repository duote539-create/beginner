function changeColor() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeImg(){
    var img = document.getElementById("img");
    if(img){
        img.src = "https://picsum.photos/300?random=" + Math.random();
    }
}

// ===== 留言功能（带记忆） =====
function addMessage() {
    var msg = document.getElementById("msg").value;

    if(msg == "") return;

    var messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(msg);

    localStorage.setItem("messages", JSON.stringify(messages));

    showMessages();
}

function showMessages() {
    var list = document.getElementById("list");
    if(!list) return;

    list.innerHTML = "";

    var messages = JSON.parse(localStorage.getItem("messages")) || [];

    for(var i=0;i<messages.length;i++){
        var li = document.createElement("li");
        li.innerText = messages[i];
        list.appendChild(li);
    }
}

// 页面加载时读取留言
window.onload = function(){
    showMessages();
}

// ===== 时间 =====
function updateTime() {
    var now = new Date();
    var t = document.getElementById("time");
    if(t){
        t.innerHTML = "现在时间：" + now.toLocaleString();
    }
}

setInterval(updateTime, 1000);