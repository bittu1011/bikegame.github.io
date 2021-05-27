let character=["./ch1.png","./ch2.png"];
let cock = document.getElementById("cock");
let bike = document.getElementById("image");
let jumpbtn = document.getElementById("jumpbtn");
let popup = document.querySelector("gov");
let startbtn = document.getElementById("startbtn");
let bgsound = new Audio("bgsound.mp3");
let changebtn=document.getElementById("characterbtn");
let counter=1;
changebtn.addEventListener("click",()=>{
    if(counter==1){
         bike.src="./ch2.png"
         counter--
         console.log("true")
    }else{
        counter++
        bike.src="./ch1.png"
        console.log("false",imgsrc)
    }
})
startbtn.addEventListener("click", start)
function start() {
    bgsound.play()
    pausebtnFun();
    document.getElementById("startbtn").classList.add("hide")
    document.getElementById("back").classList.add("backanimation")
    document.getElementById("road").classList.add("roadanime")
    cock.classList.add("cockmove")
    window.addEventListener("keydown", (e) => {
        console.log(e.key)
        if (e.key === "ArrowUp") {
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
            let road = document.getElementById("road");
            road.classList.remove("roadanime");
            console.log("gameover")
            window.location.reload()
            popup.classList.add("gameover")

        }
    }, 100)
}
function pausebtnFun() {
    let plybtn = document.createElement("button");
    plybtn.setAttribute("id", "playbtn")
    plybtn.innerText="play/pause"
    document.getElementById("playPause").appendChild(plybtn);
    plybtn.addEventListener("click", () => {
        if (road.style.animationPlayState === "paused") {
            cock.style.animationPlayState = "running";
            back.style.animationPlayState = "running";
            road.style.animationPlayState = "running";
            bike.style.animationPlayState = "running";
            bgsound.play();
        } else {
            bgsound.pause();
            cock.style.animationPlayState = "paused";
            back.style.animationPlayState = "paused";
            road.style.animationPlayState = "paused";
            bike.style.animationPlayState = "paused";

        }

    })
}
