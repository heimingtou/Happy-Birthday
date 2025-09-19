let switchBtn =document.querySelector(".swicth")
const body = document.querySelector("body");
let candle=document.querySelector(".candle")
let fire=document.querySelector(".fire")
let letter=document.querySelector(".letter")
let h=document.querySelector("h2")
let dr=document.querySelector(".dream")
let music=document.querySelector("#bgMusic")
let t=Math.floor(Math.random()*400);
let l=Math.random()<0.5? Math.floor(Math.random()*560):Math.floor(Math.random()*(1440-880+1)+560);
switchBtn.style.left=l+"px";
switchBtn.style.top=t+"px";
let lamp=document.querySelector(".lamp")
let cake=document.querySelector(".cake")
const container = document.querySelector(".confetti-container");
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // vị trí ngẫu nhiên
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 1 + Math.random() * 2 + "s";

    container.appendChild(confetti);

    // tự động xóa confetti sau khi rơi xong
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
candle.addEventListener("click",()=>{
    h.style.display="none"
    fire.style.opacity="1";
    dr.style.opacity="1"
    for(let i=0;i<500;i++){
        setTimeout(createConfetti, i * 30);
    }
    setTimeout(() => {
        letter.style.opacity="1"
        letter.style.zIndex="3"
    
    }, 6000);
})
switchBtn.addEventListener("click",()=>{
    music.play();
    lamp.style.display="none";
    body.classList.add("showb");
    cake.classList.add("show")
    switchBtn.style.display="none"
})