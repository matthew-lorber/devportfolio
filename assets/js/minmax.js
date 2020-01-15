/* WINDOW MIN/MAX */
// on clicking the min or max element, run mix/max function
$("#max").click(openFullscreen);
$("#min").click(exitFullscreen);

// ENTER
function openFullscreen() {
    // identify the window as element to min/max
    elem = document.documentElement;
    // fade out min/max element not needed
    $("#max").fadeToggle(500);
    window.setTimeout(()=>$("#min").fadeToggle(500),500);
    // browser selection
    if (elem.requestFullscreen) {elem.requestFullscreen()}
    else if (elem.mozRequestFullScreen) {elem.mozRequestFullScreen()}
    else if (elem.webkitRequestFullscreen) {elem.webkitRequestFullscreen()}
    else if (elem.msRequestFullscreen) {elem.msRequestFullscreen()}
}
// EXIT
function exitFullscreen() {
    // fade out min/max element not needed
    $("#min").fadeToggle(500);
    window.setTimeout(()=>$("#max").fadeToggle(500),500);
    // browser selection
    if (document.exitFullscreen) {document.exitFullscreen()}
    else if (document.mozCancelFullScreen) {document.mozCancelFullScreen()}
    else if (document.webkitExitFullscreen) {document.webkitExitFullscreen()}
    else if (document.msExitFullscreen) {document.msExitFullscreen()}
}