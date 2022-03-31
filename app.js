
function run() {
document.getElementById("paragraph"). innerHTML = "Hello World!!!";
document.getElementById("paragraph").style.backgroundColor = "blue";
document.getElementById("paragraph").style.color = "white";
document.getElementById("paragraph").style.padding = "20px";
randomNum()
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random")
     x. innerHTML = ran;
    x.style.backgroundColor = "blue";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center";

}

function userNumber() {
let user = document.getElementById("getNumber").value;
alert(user)
}






















































































