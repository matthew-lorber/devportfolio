$(".nav").click(()=>{
    $("section").css("transition","all 0s none");
    window.setTimeout(()=>{$("section").css("transtition","all 1s ease-in-out")},1500);
})
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
        complete: ()=> $('body').css("transform-origin",j*vh)
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
        complete: ()=> $('body').css("transform-origin",j*vh)
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
        complete: ()=> $('body').css("transform-origin",i*vw)
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
        complete: ()=> $('body').css("transform-origin",i*vw)
    })
});