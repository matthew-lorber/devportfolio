// $(".nav").click(()=>{
//     $("section").css("transition","all 0s none");
//     window.setTimeout(()=>{$("section").css("transtition","all 1s ease-in-out")},1500);
// })

// nav animations (4)
$("#navU").click(function(){
    let sss = document.querySelectorAll("section");
    for (let i=0; i<sss.length; i++) {
        
        let dt = $(sss[i]).position().top;
        console.log("pre",dt);
        $(sss[i]).css("top",dt + window.innerHeight + "px");
        console.log("post",$(sss[i]).position().top)
    }
    // j+=1;
    // let tl = anime.timeline({})
    // tl
    // .add({
    //     targets: 'section',
    //     easing: 'easeInOutExpo',
    //     translateY: j*vh,
    //     duration:100
    // })
});

$("#navD").click(function(){
    let sss = document.querySelectorAll("section");
    for (let i=0; i<sss.length; i++) {
        
        let dt = $(sss[i]).position().top;
        console.log("pre",dt);
        $(sss[i]).css("top",dt - window.innerHeight + "px");
        console.log("post",$(sss[i]).position().top)
    }
    // j-=1;
    // let tl = anime.timeline({})
    // tl
    // .add({
    //     targets: 'section',
    //     easing: 'easeInOutExpo',
    //     translateY: j*vh,
    //     duration:100
    // })
});

$("#navL").click(function(){
    // i+=1;
    // let tl = anime.timeline({})
    // tl
    // .add({
    //     targets: 'section',
    //     easing: 'easeInOutExpo',
    //     translateX: i*vw,
    //     duration:100
    // })
});

$("#navR").click(()=>{
    // i-=1;
    // let tl = anime.timeline({})
    // tl
    // .add({
    //     targets: 'section',
    //     easing: 'easeInOutExpo',
    //     translateX: i*vw,
    //     duration:100
    // })
});