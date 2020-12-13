import {Shape} from './Shape.js';

export class EvilCircle extends Shape {
    constructor(x, y, color, size) {
        super(x, y, color, size);
    }

    drawEvilCircle(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds(width, height) {
        if ((this.x + this.size) >= width) {
            this.x -= this.size;
        }

        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }

        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }

        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    setControls() {
        var _this = this;

        window.onkeydown = function ( e)

        {
            if (e.key === 'a') {
                _this.x -= _this.velX + 20;
            } else if (e.key === 'd') {
                _this.x += _this.velX + 20;
            } else if (e.key === 'w') {
                _this.y -= _this.velY + 20;
            } else if (e.key === 's') {
                _this.y += _this.velY + 20;
            }
        }
    }

    detectCollisionEvilCircle(balls, count, paragraph) {
        for (let j = 0; j < balls.length; j++) {
            if (1 === 1) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].exists = false;
                    count--;
                    paragraph.textContent = 'Ball count: ' + count;
                }
            }
        }
    }

}