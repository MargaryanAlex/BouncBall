const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const press = document.getElementById("press");
import {
    BallEngine
} from "./engine.js"

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let ball = new BallEngine(canvas, ctx, 200, 51, 50, 20)
ball.fillBall()

window.addEventListener("keydown", function (e) {
    if (e.code == "Space") {


        ball.jump()
        ball.move();
    }

});
press.addEventListener("click", () => {
    ball.move();
    ball.jump()

    press.style.display = "none";
});