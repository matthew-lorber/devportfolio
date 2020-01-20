$("#navU").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().top;
        $(sss[i]).css("top",dt + window.innerHeight + "px");
    }
});

$("#navD").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().top;
        $(sss[i]).css("top",dt - window.innerHeight + "px");
    }
});

$("#navL").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().left;
        $(sss[i]).css("left",dt + window.innerWidth + "px");
    }
});

$("#navR").click(()=>{
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().left;
        $(sss[i]).css("left",dt - window.innerWidth + "px");
    }
});