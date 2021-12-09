export class BallEngine {
    constructor(canvas,ctx, x, y, radius,progress) {
        this.ctx = ctx
        this.canvas=canvas
        this.x = x
        this.y = y
        this.radius = radius
        this.progress=progress
        this.speedx=progress
        this.speedy=progress
    }
    fillBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();

    }
    move() {

        
        this.jump();

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.fillBall()
        }

    jump() {

        if (this.progress < 0.005) {

            return;
        } else {
            this.speedx *= 0.999;
            this.speedy *= 0.999;

            this.progress *= 0.99;
            if (this.x > this.canvas.width - 50 || this.x < 50) {
                this.speedx *= -1;
            }
            if (this.y > this.canvas.height - 50 || this.y < 50) {
                this.speedy *= -1;
            }
            this.x += this.speedx;
            this.y += this.speedy;

            console.log(this.progress);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.fillBall();
            window.requestAnimationFrame(this.jump);
        };


    };
}