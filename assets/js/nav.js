$("#nav1").mouseover(()=>{
    anime({
        targets: '#roof',
        translateY:[0,-8,0],
        rotate:[0,-5,5,0],
        duration:500,
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav2").mouseover(()=>{
    anime({
        targets: '#dot',
        translateY:[0,-4,0],
        duration:500,
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav3").mouseover(()=>{
    anime({
        targets: '#portfolio',
        rotate:[0,-45,0],
        duration:600,
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav4").mouseover(()=>{
    anime({
        targets: '#mailto',
        translateX:[0,6,0],
        duration:600,
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav5").mouseover(()=>{
    anime({
        targets: '.codepen',
        rotate:[0,90,0],
        delay:anime.stagger(75),
        duration:600,
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav6").mouseover(()=>{
    anime({
        targets: '.linkedin',
        scale:[1,1.3,1],
        duration:600,
        delay: anime.stagger(150, {direction: 'forward'}),
        loop:false,
        easing:'easeInOutSine'
    })
});
$("#nav7").mouseover(()=>{
    anime({
        targets: '#github',
        keyframes: [
            {stroke:'#fff'},
            {stroke:'#000'}
        ],
        duration:600,
        loop:false,
        easing:'easeInOutSine'
    })
});