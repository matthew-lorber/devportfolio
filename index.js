// fade in the mouse circle
$(window).on("load",()=>$("#mouseCir").fadeToggle(500));
// move circle on mousemove, offset by 1/2 div
$(document).on('mousemove', function(e) {
    $("#mouseDiv").css("left", e.pageX - 50).css("top", e.pageY - 50);
});
// scale on mousedown thru css ease
$(document).on('mousedown', function() {
    $("#mouseCir").css("transition","0.5s ease").css("transform","scale(0.5)").css("stroke-width","2");
});
// scale back on mouseup by resetting css
$(document).on('mouseup', function() {
    $("#mouseCir").css("transform","scale(1)").css("stroke-width","1");
    window.setTimeout(()=>$("#mouseCir").css("transition","none"),500);
});