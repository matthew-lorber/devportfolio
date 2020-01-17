/* PAGE LOADER */
// gets & writes date to window
$("#now").html(new Date(Date.now()).toLocaleDateString("en-US"));

// runs flock animation NEED MORE COWBELL -=== RANDOM ANIMATION
anime({
    targets: '#flock',
    duration: 5000, // should make this an ease like the mouse follow
    easing: 'easeInOutSine',
    left: ()=> {return Math.floor(Math.random() * 1 * window.innerWidth)},
    top: ()=> {return Math.floor(Math.random() * 1 * window.innerHeight)},
    loop:true
})
anime({
    targets: '.flockParticle',
    translateX:()=> {return anime.random(-50,50)},
    translateY:()=> {return anime.random(-50,50)},
    rotate:()=> {return anime.random(90,180)},
    scale:()=> {return anime.random(0.5,3)},
    loop:true
})

// runs cartesian animation
$(window).on('load',function() {
    let tl = anime.timeline({
        easing: 'easeInOutSine',
        delay: anime.stagger(40),
        direction: 'alternate',
        loop:2
    });

    tl
    .add({
        targets: '.cp',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration:1500,
    })
    .add({
        targets:'.cpFill',
        fill:'#fff',
        duration:700,
        easing:'easeInSine'
    },'-=1200')
    .add({
        targets: '.cp',
        duration:1500
    })
})


function cascade() {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let divs = document.querySelectorAll(".fall");
    let color = 255;

    for (let i=0;i<divs.length;i++) {
        color *= 0.8;
        let divColor = 'rgb(' + color + ',' + color + ',' + color + ')';
        divs[i].style.background = divColor;
    }
    let tl = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 2000
    });

    tl
    .add({
        targets: '.fall',
        duration: 1000,
        direction: 'forward',
        delay: anime.stagger(100),
        rotate: 90,
        complete: ()=> {
            $('body').css('background','orange');
        }
    })
    .add({
        targets: '.fall',
        width:vh,
        height:vw,
        translateX: vh,
        rotate: -90,
        delay: anime.stagger(50, {direction: 'reverse'})
    })
    .add({
        targets: '#me',
        opacity:[0,1],
        complete: function() {
            // 
            $('#hello').fadeToggle(1000);
            window.setTimeout(()=> {
                anime({
                    targets:'.fall',
                    translateY:vw,
                    duration:1000,
                    easing:'easeOutBack'
                });
            },700)
            
            window.setTimeout(()=>{
                $('#living').fadeToggle(1000);
                anime({
                    targets: '#longhorn',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 2000,
                    direction: 'forward',
                    loop: false,
                })
            },1000);

            window.setTimeout(()=>$('#living').fadeToggle(1000),3000);

            window.setTimeout(()=>{
                anime({
                    targets: '.fall',
                    rotateY: 90,
                    duration: 1000,
                    delay: anime.stagger(50, {direction: 'reverse'}),
                    easing: 'easeInOutSine'
                })
            },4000);

            window.setTimeout(()=>$('#about').fadeToggle(1000),5000);

            window.setTimeout(()=>{
                $('#about').fadeToggle(1500);
                $('#pleased').fadeToggle(1000);
            },8000);

            window.setTimeout(()=>{
                $('#nav').fadeToggle(1000);
                $('.fall').remove();
                
            },8500);
        }
    },'-=1500')
}

// function pppp() {
//     createCanvas(window.innerWidth,window.innerHeight);
// }

// function draw() {
//     if (mouseIsPressed) {
//       fill(0);
//     } else {
//       fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//   }