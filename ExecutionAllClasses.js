import {Ball} from './Ball.js';
import {EvilCircle} from './EvilCircle.js';

export class ExecutionAllClasses {
    constructor(balls, ctx, width, height, count, paragraph) {
        this.balls = balls;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.count = count;
        this.paragraph = paragraph;
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateBall(x, y, color, size, velX, velY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velX = velX;
        this.velY = velY;

        for (let i = 0; i <= this.count; i++) {
            this.size = this.random(10, 20);
            this.x = this.random(this.size, this.width - this.size);
            this.y = this.random(this.size, this.height - this.size);
            this.color = 'rgb(' + this.random(0, 255) + ',' + this.random(0, 255) + ',' + this.random(0, 255) + ')';
            this.velX = this.random(-7, 7);
            this.velY = this.random(-7, 7);
            this.balls.push(new Ball(this.x, this.y, this.color, this.size, this.velX, this.velY));
        }
    }

    loopAll(e) {
        this.e= e;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw(this.ctx);
            this.balls[i].updatePosition(this.width, this.height);

            for (let j = 0; j < this.balls.length; j++) {
                if (this.balls[i].detectBallCollision(this.balls[j])) {
                    if (!(this.balls[j] === this.balls[i])) {
                        this.balls[j].color = this.color = 'rgb(' + this.random(0, 255) + ',' + this.random(0, 255) + ',' + this.random(0, 255) + ')';
                    }
                }
            }
            this.balls[i].detectBallCollision(this.balls);
        }
        this.size = 6;
        this.color = 'red';
        let evil = new EvilCircle(this.x, this.y, this.color, this.size);
        evil.drawEvilCircle(this.ctx);
        //evil.checkBounds(this.width, this.height);

        //evil.detectCollisionEvilCircle(this.balls, this.count, this.paragraph);
        evil.setControls(this.e);

        requestAnimationFrame(this.loopAll.bind(this));
        // loop end
    }
}


/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*           for (let j = 0; j < this.balls.length; j++) {


                if (this.balls[i].detectCollision(this.balls[j])) {
                    this.balls[j].color = this.color = 'rgb(' + this.random(0, 255) + ',' + this.random(0, 255) + ',' + this.random(0, 255) + ')';
                    document.body.style.backgroundColor = 'blue';
                }
                // this.balls[i].detectCollision(this.balls);
                /*
                        for (let i = 0; i < this.balls.length; i++) {
                              for (let j = 0; j < this.balls.length; j++) {
                                //if (1 === 1) {
                                    this.balls[i].draw(this.ctx);
                                     this.balls[i].updatePosition(this.width, this.height);
                                     if( this.balls[i].detectCollision(this.balls[j])===true) {//===  this.balls[j].detectCollision(this.balls[i])
                                        //do something
                                         console.log('haaaasdsdsdsdaa');
                                           this.balls[j].color = this.color = 'rgb(' + this.random(0,255)+ ',' + this.random(0,255) + ',' + this.random(0,255) +')';
                                     } this.balls[i].detectCollision(this.balls)
                                //}}}*/

