/* MOUSE POINTER -- P5.JS */

let x = 1;
let y = 1;
let easing = 0.05;

setup = ()=> createCanvas(window.innerWidth,window.innerHeight);

draw = ()=> {
    background(255);
    x += (mouseX - x) * easing;
    y += (mouseY - y) * easing;
    stroke(0);
    ellipse(x, y, 50, 50);
}