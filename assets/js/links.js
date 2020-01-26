$("#pm").on("click", function() {
    if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        anime({targets: "#pm", width: 40, height: 40});
        anime({targets: "#pmx", rotate: 0});
        anime({targets: ".link", translateX: 0, translateY: 0, opacity:0});
    } else {
        $(this).addClass("open");
        anime({targets: "#pm", width: 75, height: 75})
        anime({targets: "#pmx", rotate: 45});
        anime({targets: "#li", translateX: -50, opacity:1});
        anime({targets: "#mt", translateX: 50, opacity:1});
        anime({targets: "#gh", translateY: -50, opacity:1});
        anime({targets: "#cp", translateY: 50, opacity:1});
    }
});