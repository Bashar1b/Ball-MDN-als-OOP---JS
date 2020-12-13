//  here all thing is done
export class Shape {
    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 5 * Math.PI);
        ctx.fill();
    }
}