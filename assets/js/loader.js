/* PAGE LOADER */




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