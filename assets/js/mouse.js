// mouse following circle done in P5.js
let x = 1;
let y = 1;
let easing = 0.05;
setup = ()=> createCanvas(windowWidth,windowHeight);
draw = ()=> {
    clear();
    noFill();
    x += (mouseX - x) * easing;
    y += (mouseY - y) * easing;
    smooth();
    stroke(255);
    ellipse(x, y, 50, 50);
}
// mouse coordinate display
$('body').mousemove(function(e){
    $('#mx').html(Math.floor(mouseX));
    $('#my').html(Math.floor(mouseY));
});