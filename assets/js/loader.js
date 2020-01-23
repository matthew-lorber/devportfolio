/* PAGE LOADER */
$(window).on("load",function(){
    $("#L11").addClass("here");
    $("#grid-wrapper, #mIn, .Qtext, h3").fadeToggle(1000);
});



//card expander
$(".expander").click(function(){
    if ($(this).html() === "expand") {
        $(".xpandL").css("opacity",1).css("left","25vw").css("top","5vh").css("transform","rotate(8deg)");
        $(".xpandR").css("opacity",1).css("right","25vw").css("top","5vh").css("transform","rotate(-8deg)");
        $(".expander").html("retract");
    } else {
        $(".xpandL").css("opacity",0).css("left","0").css("top","0").css("transform","rotate(0)");
        $(".xpandR").css("opacity",0).css("right","0").css("top","0").css("transform","rotate(0)");
        $(".expander").html("expand");
    }
});

/* DIMENSIONING */
function dimension() {
    $(".card").each(function(){
        $(this).append(
            "<div class='dimH'>" + Math.floor($(this).height()) + "px</div>" +
            "<div class='dimW'>" + Math.floor($(this).width()) + "px</div>"
        );

    });
}
dimension();




    // $("#myCard").toggle();
    // $('#myCard').css("transform","scale(1)");
    // $("#myCard").addClass("bounce")



// function tL1() {
//     $("#cartesian").remove();
//     $("#graphPaper").fadeToggle(1000);
//     window.setTimeout(()=>{$(".nav").fadeToggle(1000);updateNavs()},1000);
//     window.setTimeout(()=>{$(".expression").fadeToggle(1000);},2000);
//     window.setTimeout(()=>{
//         $("#layout").fadeToggle(1000);
//         tL2()
//     },3000);
//     return false;
// }

// function tL2() {
//     let tl = anime.timeline({
//         easing: 'easeInOutSine'
//     });
//     tl
//     .add({
//         targets: '#r-1',
//         duration:3000,
//         opacity:[0.2,0.8,0.2,0.8,0.2,0.8,0.2,0.6],
//     })
//     .add({
//         targets:'#layout',
//         rotateZ:-45,
//         rotateY:-45,
//         rotateX:-25,
//         // complete: ()=> greeting()
//     },'-=1000');
//     return false;
// }

// function greeting() {
//     $("#me").fadeToggle(1000);
//     window.setTimeout(()=>{$("#im").fadeToggle(1000)},1500);
// }
// function cascade() {
//     let vh = window.innerHeight;
//     let vw = window.innerWidth;
//     let divs = document.querySelectorAll(".fall");
//     let color = 255;

//     for (let i=0;i<divs.length;i++) {
//         color *= 0.8;
//         let divColor = 'rgb(' + color + ',' + color + ',' + color + ')';
//         divs[i].style.background = divColor;
//     }
//     let tl = anime.timeline({
//         easing: 'easeInOutExpo',
//         duration: 2000
//     });

//     tl
//     .add({
//         targets: '.fall',
//         duration: 1000,
//         direction: 'forward',
//         delay: anime.stagger(100),
//         rotate: 90
//     })
//     .add({
//         targets: '.fall',
//         width:vh,
//         height:vw,
//         translateX:vh,
//         rotate:-90,
//         delay: anime.stagger(50, {direction: 'reverse'})
//     })
//     .add({
//         targets: '#me',
//         opacity:[0,1],
//         complete: function() {
//             $('#hello').fadeToggle(1000);
//             window.setTimeout(()=> {
//                 anime({
//                     targets:'.fall',
//                     translateY:vw,
//                     duration:1000,
//                     easing:'easeOutBack'
//                 });
//             },700)
            
//             window.setTimeout(()=>{
//                 $('#living').fadeToggle(1000);
//                 anime({
//                     targets: '#longhorn',
//                     strokeDashoffset: [anime.setDashoffset, 0],
//                     easing: 'easeInOutSine',
//                     duration: 2000,
//                     direction: 'forward',
//                     loop: false,
//                 })
//             },1000);

//             window.setTimeout(()=>$('#living').fadeToggle(1000),3000);

//             window.setTimeout(()=>{
//                 anime({
//                     targets: '.fall',
//                     rotateY: 90,
//                     duration: 1000,
//                     delay: anime.stagger(50, {direction: 'reverse'}),
//                     easing: 'easeInOutSine'
//                 })
//             },4000);

//             window.setTimeout(()=>$('#about').fadeToggle(1000),5000);

//             window.setTimeout(()=>{
//                 $('#about').fadeToggle(1500);
//                 $('#pleased').fadeToggle(1000);
//             },8000);

//             window.setTimeout(()=>{
//                 $('#nav').fadeToggle(1000);
//                 $('.fall').remove();
                
//             },8500);
//         }
//     },'-=1500')
// }

