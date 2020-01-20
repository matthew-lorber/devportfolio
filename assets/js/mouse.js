// MOUSE EFFECTS (FOLLOW / PARALLAX / SCALE)
window.addEventListener("mousemove",getMouse); 
const cc = {x:0, y:0};
const mm = {x:0, y:0};
setInterval(followMouse,15);

function getMouse(e) {
    mm.x = e.clientX;
    mm.y = e.clientY;
    $("#mx").html(mm.x); 
    $("#my").html(mm.y);
    parallaxFx();
}

// MOUSE FOLLOW
function followMouse() {
    const distX = mm.x - cc.x;
    const distY = mm.y - cc.y;
    cc.x += distX/25;
    cc.y += distY/25;
    $("#mOut").css({left: cc.x - 50 + "px"}).css({top: cc.y - 50 + "px"});
}

// MOUSE PARALLAX
function parallaxFx() {
    let ctr = {x:window.innerWidth/2, y:window.innerHeight/2};
    let d = {x:-(ctr.x - mm.x), y:-(ctr.y - mm.y)};
    let r = {x:-d.x/20,y:d.y/20};
    $('h1').css({'transform':'translateX('+10*d.x/ctr.x+'px) translateY('+10*d.y/ctr.y+'px) rotateY('+r.x+'deg) rotateX('+r.y+'deg)'});
    $('h2').css({'transform':'translateX('+40*d.x/ctr.x+'px) translateY('+40*d.y/ctr.y+'px) rotateY('+r.x+'deg) rotateX('+r.y+'deg)'});
};

// MOUSEDOWN (SCALE)
window.addEventListener("mousedown", mouseFx);
window.addEventListener("mouseup", ()=> restore());

function mouseFx() {
    $("#mIn").css("transform","scale(1.5)");
    $("h1,h2").css("transform","scale(1.2)");
}

restore = ()=> {
    $("#mIn").css("transform","scale(1)");
    $("h1,h2").css("transform","scale(1)");
}