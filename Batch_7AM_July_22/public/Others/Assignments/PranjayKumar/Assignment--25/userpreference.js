$(document).ready(() => {
    if(localStorage.getItem("user_name") != null)
    {
        showWelcomeMassege( localStorage.getItem("user_name"));
    }
    
    if(localStorage.getItem("user_theme") != null)
    {
        applaytheme(localStorage.getItem("user_theme"));
    }
})

var saveuserName = () =>{
    var userName = $(".uName").val();
    var pass = $("#pass1").val();
    localStorage.setItem("user_name",userName);
    localStorage.setItem("user_pass",pass);
    showWelcomeMassege(userName);
}
var showWelcomeMassege = (uName) =>{
    $(".welcomeBlock").html("Welcome To Mr " + uName);
    $(".welcomeBlock").show(2000);
}
var getuserchoosetheme = () => {
    var colorname = $("#themeChoose").val();
    localStorage.setItem("user_theme",colorname);
    applaytheme(colorname);
}
applaytheme = (colorname) => {
    $("body").css("background-color",colorname);
}