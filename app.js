let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        run(e)
    }
});

userNum.focus()

let counter = 0; 


function run() {
randomNum()
userNumber()
compareNumbers()
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random")
     x. innerHTML = ran;
    x.style.backgroundColor = "transparent";
    x.style.color = "black";
    x.style.padding = "10px";
    x.style.textAlign = "center";
    return ran
}

function userNumber() {
let user = document.getElementById("getNumber").value;
let y = document.getElementById("userNumber")
y.innerHTML = user;
y.style.color = "black";
y.style.backgroundColor = "transparent";
y.style.padding = "10px"
y.style.textAlign = "center";
return user 
}

function compareNumbers() {
let a = randomNum()
let b = userNumber()
let z = document.getElementById("compare")
let c = document.getElementById("counter")
if ( a!= b) {
   z.innerHTML = "Numbers are not the same. Computer got " + a + ", and user got "
+ b;
z.style.color = "black";
z.style.backgroundColor = "transparent";
z.style.padding = "10px"
z.style.textAlign = "center";
counter++
c.innerHTML = "You have tried " + counter + " times."
c.style.color = "black";
c.style.backgroundColor = "transparent";
c.style.padding = "10px"
c.style.textAlign = "center";
} else if (a == b) {
z.innerHTML = "Numbers are the same. Computer got " + a + ", and user got "
+ b;
z.style.color = "black";
z.style.backgroundColor = "green";
z.style.padding = "10px"
z.style.textAlign = "center";
c.innerHTML = "You have tried " + counter + " times to get it right."
c.style.color = "black";
c.style.backgroundColor = "transparent";
c.style.padding = "10px"
c.style.textAlign = "center";
counter = 0;   
    }
    resetInput()
}


function resetInput() {
    document.getElementById("getNumber").value = ""
}

















































































