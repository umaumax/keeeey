$(function() {
    // original keybind
    window.addEventListener('keydown', function(event) {
        console.log(event);
        // Ctrl + Up -> Home
        if (event.keyCode == 38 && event.ctrlKey) {
            $(window).scrollTop(0);
        }
        // Ctrl + Down -> End
        if (event.keyCode == 40 && event.ctrlKey) {
            $(window).scrollTop($(document).height());
        }
    }, true);
});
