/* PAGE LOADER */
$('#logo').fadeToggle(600);

let vh = window.innerHeight;
let vw = window.innerWidth;

/* LOGO */
anime({
    targets: '.logo',
    fill: '#fff',
    duration: 2000,
    easing: 'easeInSine'
});
anime({
    targets: '#sun',
    keyframes: [
        {translateX:0.7*vw},
        {translateX:0.4*vw},
        {translateX:0.5*vw}
    ],
    easing: 'easeInOutSine',
    duration: 1250,
    direction: 'forward',
    loop: false
})
anime({
    targets: '.logo',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInSine',
    duration: 1500,
    direction: 'forward',
    loop: false,
    complete: ()=>{
        $("#logo").fadeToggle(1000);
        $("#sun").fadeToggle(1000);
        window.setTimeout(()=>{
            $("#logo").remove();
        },2000);
    }
})

/* LOAD SEQUENCE */
window.setTimeout(function loader() {
    $("#loader").toggle();

    let tl = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 750,
        complete: function() {
            $("#loader").fadeToggle(1000);
                cascade();
            window.setTimeout(()=>{
                $("#hello").fadeToggle(1000);
            },1000)
        }
    });
        
    tl
    .add({
        targets: '#tree',
        keyframes: [
            {scale:[0,1.1]},
            {scale:[1.1,1]}
        ],
        duration: 350
    })
    .add({
        targets: '.leaf',
        keyframes: [
            {scale:[0,1.2]},
            {scale:[1.2,1]}
        ],
        duration: 150,
        delay: anime.stagger(20)
    },'+=1000')
    .add({
        targets: '.fruit',
        keyframes: [
            {scale:[0,1.2]},
            {scale:[1.2,1]}
        ],
        duration: 300,
        delay: anime.stagger(50)
    },'+=500')
    .add({
        targets: '#loadText',
        opacity:[0,1],
        duration: 2000
    })
    .add({
        targets: '#tree',
        scale:[1,0],
        duration: 300
    },'+=1000')
    .add({
        targets: '.leaf',
        rotate: 360,
        scale:[1,0],
        duration: 1000
    },'-=600')
    .add({
        targets: '.fruit',
        scale:[1,0],
        duration: 200
    },'-=600')
},4200);

function cascade() {
    let tl = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 2000
    });

    tl
    .add({
        targets: '.fall',
        duration: 1000,
        delay: anime.stagger(100),
        rotate: 90,
        complete: ()=> {$('body').css('background','purple')}
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
                // $('.fall').remove();
                
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