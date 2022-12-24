

// show message
let showWelcomeMsg = (newVal) => {
    $('h3').html('Welcome Mr.' + newVal);
}

$(document).ready(function () {
    // get userName form localStorage
    if (localStorage.getItem('user_name') != null) {
        showWelcomeMsg(localStorage.getItem('user_name'));
    }
    if (localStorage.getItem('theme_color') != null) {
        applyTheme(localStorage.getItem('theme_color'));
    }
});

// get input value
$('#submit').click(function () {
    let newVal = $('#userName').val();
    localStorage.setItem('user_name', newVal);
    $('#userName').val("");
    showWelcomeMsg(newVal)
});

let getTheme = () => {
    let color = $('#chooseTheme').val();
    $('body').css('background-color', color);
    localStorage.setItem('theme_color', color)
}

let applyTheme = (color) => {
    $('body').css('background-color', color);
}



