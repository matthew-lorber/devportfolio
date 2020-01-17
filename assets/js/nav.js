let i = 0, j = 0;
let vh = window.innerHeight;
let vw = window.innerWidth;

$(window).on("load", ()=>{
    $("#layout").fadeToggle(50);
    let tl = anime.timeline({
        loop: false
    });
    tl
    .add({
        targets: '#r-1',
        duration:1500,
        opacity:[0.2,0.6,0.2,0.6,0.2,0.6],
        easing: 'easeInOutSine'
    })
    .add({
        targets:'#layout',
        // rotateZ:-45,
        // rotateY:-45,
        // rotateX:-25,
    })
})

$("#navU").click(()=>{
    j+=1;
    let tl = anime.timeline({
        // easing: 'easeInOutSine',
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateY: j*vh,
        duration: 1000
    })
});

$("#navD").click(()=>{
    j-=1;
    let tl = anime.timeline({
        // easing: 'easeInOutSine',
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateY: j*vh,
        duration: 1000
    })
});

$("#navL").click(()=>{
    i+=1;
    let tl = anime.timeline({
        // easing: 'easeInOutSine',
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateX: i*vw,
        duration: 1000
    })
});

$("#navR").click(()=>{
    i-=1;
    let tl = anime.timeline({
        // easing: 'easeInOutSine',
        direction: 'forward',
        loop: false
    })
    tl
    .add({
        targets: 'section',
        translateX: i*vw,
        duration: 1000
    })
});