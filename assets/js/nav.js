// if hovering location, show directions
$(".nav").hover(
    // hover in
    function(){
        // $("." + this.id.split("-")[1]).css("font-size","1rem")
    },
    // hover out
    function(){
        // $(".way").css("font-size","0rem");
    }
);

// move the sections on navigate
$("#nav-uu").click(()=>{
    let sss = $("section");
    for (let i=0; i<sss.length; i++) {
        let dy = $(sss[i]).position().top;
        $(sss[i]).css("top",dy + window.innerHeight + "px");
    }
    highlightNav(-1,0)
});
$("#nav-dd").click(()=>{
    let sss = $("section");
    for (let i=0; i<sss.length; i++) {
        let dy = $(sss[i]).position().top;
        $(sss[i]).css("top",dy - window.innerHeight + "px");
    }
    highlightNav(1,0)
});
$("#nav-ll").click(()=>{
    let sss = $("section");
    for (let i=0; i<sss.length; i++) {
        let dx = $(sss[i]).position().left;
        $(sss[i]).css("left",dx + window.innerWidth + "px");
    }
    highlightNav(0,-1)
});
$("#nav-rr").click(()=>{
    let sss = $("section");
    for (let i=0; i<sss.length; i++) {
        let dx = $(sss[i]).position().left;
        $(sss[i]).css("left",dx - window.innerWidth + "px");
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
    $(".here").removeClass("here");
    newLoc.addClass("here");
    disableEnableNav(newRow,newCol);
}

// disable/enable nav, depending on location in grid
function disableEnableNav(newRow,newCol) {
    if (newRow === 0) {$("#nav-uu").css({"opacity":"0.2","pointer-events":"none"})}
    else {$("#nav-uu").css({"opacity":"0.7","pointer-events":"auto"})}
    if (newRow === 2) {$("#nav-dd").css({"opacity":"0.2","pointer-events":"none"})}
    else {$("#nav-dd").css({"opacity":"0.7","pointer-events":"auto"})}
    if (newCol === 0) {$("#nav-ll").css({"opacity":"0.2","pointer-events":"none"})}
    else {$("#nav-ll").css({"opacity":"0.7","pointer-events":"auto"})}
    if (newCol === 2) {$("#nav-rr").css({"opacity":"0.2","pointer-events":"none"})}
    else {$("#nav-rr").css({"opacity":"0.7","pointer-events":"auto"})}
}

// allow drag & drop of nav icon
