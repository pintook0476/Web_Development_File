

var showWelcomeMsg = (uname) => {
    $(".welcomeBlock").html("Welcome to page Mr. " + uname);
    $(".welcomeBlock").show(2000);
}

$(document).ready(() => {
    if (sessionStorage.getItem("user_name") != null) { // user alredy visited wbpge,
        showWelcomeMsg(sessionStorage.getItem("user_name"));
    }

    if (sessionStorage.getItem("user_theme") != null) {
        applyTheme(sessionStorage.getItem("user_theme"))   
    }
})

var saveUserName = () => {
    var userName = $("#uname").val();
    sessionStorage.setItem("user_name", userName);
    showWelcomeMsg(userName);
}



var getUserChoosenTheme = () => {
    var colorname = $("#themeChooser").val();

    sessionStorage.setItem("user_theme", colorname);
    console.log(colorname);
    applyTheme(colorname);
}

var applyTheme = (colorname) => {
    $("body").css("background-color", colorname);
}