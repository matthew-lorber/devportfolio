let i = 0, j = 0;
let thisLoc = [i,j];
let vh = window.innerHeight;
let vw = window.innerWidth;

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

