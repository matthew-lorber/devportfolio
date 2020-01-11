$(window).click(function(e) {
    switch(e.target.id) {
        case 'nav1':location.reload();break;
        case 'nav2':about();break;
        case 'nav3':portfolio();break;
    }
});

function about() {
    $('#about').fadeToggle(1000);
}