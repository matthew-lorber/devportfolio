let i = 0, j = 0;
let vh = window.innerHeight;
let vw = window.innerWidth;

// nav animations (4)
$("#navU").click(()=>{
    j+=1;
    let tl = anime.timeline({
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateY: j*vh,
        duration: 1000,
        // complete: ()=> updateNavs("u")
    })
});

$("#navD").click(()=>{
    j-=1;
    let tl = anime.timeline({
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateY: j*vh,
        duration: 1000,
        // complete: ()=> updateNavs("d")
    })
});

$("#navL").click(()=>{
    i+=1;
    let tl = anime.timeline({
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateX: i*vw,
        duration: 1000,
        // complete: ()=> updateNavs("l")
    })
});

$("#navR").click(()=>{
    i-=1;
    let tl = anime.timeline({
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateX: i*vw,
        duration: 1000,
        // complete: ()=> updateNavs("r")
    })
});

function updateNavs(loc) {
    switch (loc) {
        case "u": 
        case "d": $("#pageLoc").html("contact"); $(".nav").css("opacity","0"); $("#navD").css("opacity","1"); break;
        case "l": break;
        case "r": break;
    }
}