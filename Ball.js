//here all thing is done
import {Shape} from './Shape.js';

export class Ball extends Shape {
    constructor(x, y, color, size, velX, velY) {
        super(x, y, color, size);
        this.velX = velX;
        this.velY = velY;
    }

    updatePosition(width, height) {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        this.x += this.velX;
        this.y += this.velY;
    }

    detectBallCollision(ball) {
        var dx = this.x - ball.x;
        var dy = this.y - ball.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + ball.size) {
            return true;
        }
    }
}

