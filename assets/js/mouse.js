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

// mouse pop on hold effect
window.addEventListener("mousedown",mousePop);
function mousePop() {
    $("#mouseC").css("transform","scale(0.5)");
    const x = setInterval(()=>{
        clearInterval(x);
        restore();   
    },1100);
    window.addEventListener("mouseup", ()=>{ 
        clearInterval(x);
        restore();
    });
    restore = ()=> $("#mouseC").css("transform","scale(1)");
}

// parallax effect
// window.addEventListener("mousemove",parallaxEffect);
// const ctr = {x:window.innerWidth/2, y:window.innerHeight/2};
// function parallaxEffect(e) {
//     const px = Math.floor((ctr.x - mm.x)*0.1);
//     const py = Math.floor((ctr.y - mm.y)*0.1);
//     const tx = Math.floor(Math.atan(py/px) * 180 / Math.PI);
//     const tx2 = Math.floor(0.5 * Math.atan(py/px) * 180 / Math.PI);
//     let rr = (1 + 1000/Math.sqrt(px*px+py*py)).toFixed(3);
//     let rr2 = (0 + 1000/Math.sqrt(px*px+py*py)).toFixed(3);
//     // if (rr >= 15) {rr = 15}
//     $("#pxResult").html(px);
//     $("#pyResult").html(py);
//     $("#thetaResult").html(tx + "deg");
//     $("#rrResult").html(rr);
// $(".parallax-inner-1").css("transform","rotateZ("+tx+"deg) rotateX("+py+"deg)");
// $(".parallax-inner-2").css("transform","rotateZ("+tx2+"deg) rotateX("+tx2+"deg)");
// }