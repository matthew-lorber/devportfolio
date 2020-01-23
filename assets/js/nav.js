$("#navU").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().top;
        $(sss[i]).css("top",dt + window.innerHeight + "px");
    }
    highlightNav(-1,0)
});

$("#navD").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().top;
        $(sss[i]).css("top",dt - window.innerHeight + "px");
    }
    highlightNav(1,0)
});

$("#navL").click(function(){
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().left;
        $(sss[i]).css("left",dt + window.innerWidth + "px");
    }
    highlightNav(0,-1)
});

$("#navR").click(()=>{
    let sss = $("section,.Qtext");
    for (let i=0; i<sss.length; i++) {
        let dt = $(sss[i]).position().left;
        $(sss[i]).css("left",dt - window.innerWidth + "px");
    }
    highlightNav(0,1)
});

// highlight location on grid
function highlightNav(rr,cc) {
    
    thisLoc = $(".here").attr("id");
    r = thisLoc.split("")[1];
    c = thisLoc.split("")[2];
    newRow = parseInt(r)+rr;
    newCol = parseInt(c)+cc;
    newLoc = $("#L" + newRow + newCol);
    $(".here").removeClass();
    newLoc.addClass("here");
    disEnableNav(newRow,newCol);
}

// disable || enable navigation
function disEnableNav(newRow,newCol) {
    if (newRow === 0) {$("#navU").css("opacity","0.3").css("pointer-events","none")}
    else {$("#navU").css("opacity","0.7").css("pointer-events","auto")}
    if (newRow === 2) {$("#navD").css("opacity","0.3").css("pointer-events","none")}
    else {$("#navD").css("opacity","0.7").css("pointer-events","auto")}
    if (newCol === 0) {$("#navL").css("opacity","0.3").css("pointer-events","none")}
    else {$("#navL").css("opacity","0.7").css("pointer-events","auto")}
    if (newCol === 2) {$("#navR").css("opacity","0.3").css("pointer-events","none")}
    else {$("#navR").css("opacity","0.7").css("pointer-events","auto")}

    
    updateWays();
}

// updates .way text
function updateWays() {
    $(".way").fadeToggle(1000);
    switch ($(".here").attr("id")) {
        case "L00": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html("games"); break;
        case "L01": $(".uu").html(""); $(".dd").html("home"); $(".ll").html(""); $(".rr").html(""); break;
        case "L02": $(".uu").html(""); $(".dd").html("about"); $(".ll").html("games"); $(".rr").html(""); break;
        case "L10": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html(""); break;
        case "L11": $(".uu").html("games"); $(".dd").html("back end"); $(".ll").html("about"); $(".rr").html("front end"); break;
        case "L12": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html(""); break;
        case "L20": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html(""); break;
        case "L21": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html(""); break;
        case "L22": $(".uu").html(""); $(".dd").html("about"); $(".ll").html(""); $(".rr").html(""); break;
    }
    $(".way").fadeToggle(1000);
}
