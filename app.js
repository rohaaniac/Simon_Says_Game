let gameseq = [];
let userseq = [];

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Started"); 
        started = true;

        levelUp();

    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },150);

}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },150);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;

    //random btn choose
    let randIdx= Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randColor);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}


function checkAns(idx){
    // console.log("curr level", level);
 
    if (userseq[idx]=gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="blanchedalmond";
        },250);
        reset();
    }


}
function btnPress(){
    let btn = this;
    userflash(btn);
    //Getting ID of the color that user has clicked with the help of getAttribute wrt ID
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gamese1=[];
    userseq=[];
    level=0;


}
