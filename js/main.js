const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const press = document.getElementById("press")
let x;
let y;
let progress;
let speedx;
let speedy
canvas.width=window.innerWidth
canvas.height=window.innerHeight
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

}
x = 200;
y = 51;
drawBall()

function move(e) {
    if (x <= 50) {  
        x = 51
    } else if (y <= 50) {
        y = 51
    } else if (x >= canvas.width-50) {
        x = 449
    } else if (y >= canvas.height-50) {
        y = 449
    } else {
        if (e.code == "ArrowRight") {
            x += 5
            console.log(x);
        } else if (e.code == "ArrowLeft") {
            x -= 5
            console.log(x);
        } else if (e.code == "ArrowDown") {
            y += 5
            console.log(x);
        } else if (e.code == "ArrowUp") { 
            y -= 5
            console.log(x);
        }else if(e.code=="Space"  ){
            progress = 20;
            speedx=progress
            speedy=speedx 
            jump()
            press.style.display="none"
        } 
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()
    }
}

function jump() {

    if (progress < 0.005) {
    
  return
    } else {
        speedx*=0.999
        speedy *=0.999

        progress *= 0.99;
           if (x > canvas.width-50 || x < 50) {
           speedx *= -1
        } if (y > canvas.height-50 || y < 50) {
            speedy *= -1
         } 
        x += speedx
        y += speedy

        console.log(progress);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()
        window.requestAnimationFrame(jump)
    }


}



console.log(x);
console.log(progress);

window.addEventListener("keydown", function (e) {
    console.log(e.code);
    move(e)
    


})