window.addEventListener("mousemove",getMouse); 
const cc = {x:0, y:0};
const mm = {x:0, y:0};
setInterval(followMouse,15);

function getMouse(e) {
    mm.x = e.clientX;
    mm.y = e.clientY;
    $("#mx").html(mm.x); 
    $("#my").html(mm.y);
}

function followMouse() {
    const distX = mm.x - cc.x;
    const distY = mm.y - cc.y;
    cc.x += distX/25;
    cc.y += distY/25;
    $("#follower").css({left: cc.x - 50 + "px"}).css({top: cc.y - 50 + "px"});
}

window.addEventListener("mousedown",mousePop);
function mousePop() {

}