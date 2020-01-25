$("#pm").on("click", function() {
    if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        anime({
            targets: "#pmx",
            rotate: 0
        });
        anime({
            targets: ".link",
            translateX: 0,
            translateY: 0
        });
    } else {
        $(this).addClass("open");
        anime({
            targets: "#pmx",
            rotate: 45
        });
        anime({targets: "#li", translateX: 40, translateY: -40});
        anime({targets: "#mt", translateX: -40, translateY: -40});
        anime({targets: "#gh", translateX: 40, translateY: 40});
        anime({targets: "#cp", translateX: -40, translateY: 40});
    }
});