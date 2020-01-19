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

// click-circles animation
$(".anim0").on("click",function(){
    this.style.opacity = 0.7;
    this.classList.add("circleClicked");
    $('.circleClicked').length === 3 ? scoreCircles() : "spaceFill";
    
    function scoreCircles(){
        $('#score').html(parseInt($('#score').html()) + 1);
        $('.anim0').fadeToggle(1000);
    }
});