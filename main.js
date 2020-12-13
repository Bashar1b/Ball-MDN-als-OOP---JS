import {GameBackground} from './GameBackground.js';
import {ExecutionAllClasses} from './ExecutionAllClasses.js';
import {EvilCircle} from './EvilCircle.js';

//background
let canvas, ctx, width, height, count, paragraph;

let backgroundObj = new GameBackground();
canvas = backgroundObj.canvas = document.querySelector('canvas');
ctx = backgroundObj.ctx = canvas.getContext('2d');
width = backgroundObj.width = canvas.width = window.innerWidth;
height = backgroundObj.height = canvas.height = window.innerHeight;
count = backgroundObj.count = 25;
paragraph = backgroundObj.paragraph = document.querySelector('p');
backgroundObj = new GameBackground(canvas, ctx, width, height, count, paragraph);
let x,y,color, size;

let balls = [];


const playAllObj = new ExecutionAllClasses(balls, ctx, width, height, count,paragraph);
playAllObj.generateBall();
playAllObj.loopAll();
console.log('test1');