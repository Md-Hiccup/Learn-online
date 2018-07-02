$(document).bind("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {    // Disabled F12                 
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {    // Disabled for Ctrl + Shift + I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {    // Disabled for Ctrl + Shift + J 
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {      // Disabled for Ctrl + U
        return false;
    }
}

$(document).ready(function() {
    $("body").css({
        '-webkit-user-select':  'none',
        '-moz-user-select': '-moz-none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    })
})