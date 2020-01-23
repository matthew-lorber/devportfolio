$("#grid-wrapper").click(()=>anime({targets:'.gr',rotate:[0,360],loop:false}));

// fireworks on score
function score(){
    $('#score').html(parseInt($('#score').html()) + 1);
    for (j=0; j<10; j++) {
        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;
        $("#anim").append("<div class='animEle' style='position:fixed;left:"+x+"px;top:"+y+"px;width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,0.5)'></div>");
    }

    let tl = anime.timeline({
        easing:'easeInOutSine',
        complete:()=>$(".animEle").remove()
    })
    tl
    .add({
        targets:'.animEle',
        delay:anime.stagger(50),
        scale:[0,5],
        opacity:[1,0]
    })
}

// runs cartesian animation
let tl = anime.timeline({
    easing: 'easeInOutSine'
});

tl
.add({
    targets:'.cp',
    stroke:'#fff',
    duration:50
})
.add({
    targets: '.cp',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration:1200,
    delay: anime.stagger(40)
})
.add({
    targets:'.cpFill',
    fill:'#fff',
    duration:700,
    easing:'easeInSine',
},'-=1000')
.add({
    targets:"#cartesian",
    opacity:0,
    complete:()=> {
        // tL1();
        return false;
    }
});

// ???
$("#github,githubStar").click(function(){
    $(".star").scale(1);
})