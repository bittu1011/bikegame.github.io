
// let speed = 10;
// let lastPaintTime = 0;
// function main(ctime) {
//     window.requestAnimationFrame(main)
//     if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//         return;
//     }
//     lastPaintTime = ctime;
//     run();
//     console.log("running")

// }
// window.requestAnimationFrame(main)
//     let m = 0;
//     const vw = window.innerWidth;

//     function run() {
//         m += 10
//         if (m < vw - 250) {

//             let car = document.getElementById("image");
//             // car.style.marginLeft = m + "px";
//         }
//         else {
//             // alert("started")

//             return;
//         }
//     }
let cock = document.getElementById("cock");
let bike = document.getElementById("image");
let jumpbtn = document.getElementById("jumpbtn");   
let popup=document.querySelector("gov");
let startbtn=document.getElementById("startbtn");
let bgsound=new Audio("bgsound.mp3");
startbtn.addEventListener("click",start)
function start(){
    bgsound.play()
    document.getElementById("startbtn").classList.add("hide")
    document.getElementById("back").classList.add("backanimation")
    document.getElementById("road").classList.add("roadanime")
    cock.classList.add("cockmove")
    window.addEventListener("keydown",(e)=>{
        console.log(e.key)
        if(e.key==="ArrowUp"){
            jumpbtn.disabled = true;
            bike.classList.add("jump");
            setTimeout(() => {
                jumpbtn.disabled = false;
                bike.classList.remove("jump");
            }, 700)
        }
    })
    jumpbtn.addEventListener("click", () => {
        jumpbtn.disabled = true;
        bike.classList.add("jump");
        setTimeout(() => {
            jumpbtn.disabled = false;
            bike.classList.remove("jump");
        }, 2000)
    })
    
    setInterval(() => {
        let bx = parseInt(window.getComputedStyle(bike, null).getPropertyValue("left"));
        let by = parseInt(window.getComputedStyle(bike, null).getPropertyValue("bottom"));
        let cx = parseInt(window.getComputedStyle(cock, null).getPropertyValue("left"));
        let cy = parseInt(window.getComputedStyle(cock, null).getPropertyValue("bottom"));
        offsetx = Math.abs(bx - cx);
        offsety = Math.abs(by - cy);
        console.log(offsetx, offsety)
        if (offsetx < 120 && offsetx > 80 && offsety < 20) {
            let road=document.getElementById("road");
            road.classList.remove("roadanime");
            console.log("gameover")
            window.location.reload()
            // gov.classList.add("gameover")
    
        }
    }, 100)
}
