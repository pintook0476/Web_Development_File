var loadSelectedPage = (pageType) => {
    var templateUrl = 'templates/'
    switch(pageType) {
        case 'userProfile':
            templateUrl += 'userProfile.htm';
            break;
        case 'myAccount' :
            templateUrl += 'userProfile.htm';
            break;
        case 'index':
            templateUrl += 'index.htm';
            break;
        case 'orderBag':
            templateUrl += 'orderBagTemp.htm';
            break;
    }
    $.ajax({
        url: templateUrl,
        method: 'GET',
        success: (responseHtml) => {
            $(".blockContent").html(responseHtml);
        }
    });
}

$.ajax({
    url: 'templates/footerTemp.htm',
    method: 'GET',
    success: (responseHtml) => {
        $("footer").html(responseHtml);
    }
});

$.ajax({
    url: 'templates/navbarOrlogin.htm',
    method: 'GET',
    success: (responseHtml) => {
        $(".mainHeader").html(responseHtml);
    }
});




/*
var capchaCode;
var showCapchaCode = () => {
    $("#capchaText").show();
    capchaCode = generateCapcha();
    $("#capchaText").html(capchaCode);
    html2canvas(document.querySelector('#capchaText'), {
        onrendered: function (canvas) {
            var screenshot = canvas.toDataURL('image/png');
            document.getElementById('textScreenshot').setAttribute('src', screenshot);
            $("#capchaText").hide();
        },
    });
}*/


var userNameBtnClick = () => {
    console.log("user Name Btn Is clicked");
}

// Some PreDefine Users
var preUsers = [
    {
        ufname : "Deepak",
        userId : "deepak",
        userPwd : "12345"
    },
    {
        ufname : "Mittal",
        userId : "Deepak@gotrendy.com",
        userPwd : "456123"    
    },
    {
        ufname : "Raj Prasad",
        userId : "Raj@gotrendy.com",
        userPwd : "Raj@321"
    },
    {
        ufname : "Abc",
        userId : "abc@gotrendy.com",
        userPwd : "abc121"
    } 
];



// Capcha Verification 
var capchaValue;
var reGenerateCapcha = ()=>{
    capchaValue = generateCapcha();
    $("#capchaContainer").html(capchaValue);
};
var validateUser = () => {
    var userInputCapcha = $("#capchaInput").val();
    var userData = {};
    userData.accountId = $("#uid").val();
    userData.accountPassword = $("#userPassword").val();

    if(userData.accountId && userData.accountPassword){
         if(capchaValue == userInputCapcha){
            alert("capcha Verified");
            preUsers.find((value, index)=>{
                if(value.userId == userData.accountId && value.userPwd == userData.accountPassword){
                    console.log("user find");
                    alert("User Verified");
                    $("#invalidPwd").hide();
                    $("#userNameBtn").html(value.ufname);
                    console.log(value.ufname);
                    $(".rightSideProfileBtn").attr("id", "displayBlockProperty");
                   // $(".rightSideProfileBtn").show(200);
                    $("#loginSignup").hide();
                    $(".btn-close").click();
                }
            });
        }else{
            alert("Capcha Filled is Required");
            $("#invalidPwd").show();
        }
    }else{
        alert("Enter Your Email or Password");
    }
};


// Otp Verification
var forgotOtp;
var resendOtpBtn = ()=>{
    forgotOtp = generateOtp();
    $(".temporaryOtpBox").html(forgotOtp);
};

var submitForgotOtpBtn = () =>{
    var userInputOtp = $("#gotOtpValue").val();
    if(forgotOtp == userInputOtp){
        alert("Otp Verified - Redirect To Home Page");
    }else{
        alert("Incorrect Otp");
    }
};
// Validate Forgot Password 
var checkboxClickedBtn = false;
var checkboxClicked = ()=>{
    $("#checkBoxImg").hide(100);
    $("#checkedDoneImg").show(200);
    $("#recapchaVerified").show(100);
    checkboxClickedBtn = true;
}  

var sendOtpBtnForgot = ()=>{
    var forgotEmail = $("#forgotEmailMobile").val();
    if(forgotEmail){
        if(checkboxClickedBtn == true){
            $(".forgotOtpVerification").show(200);
            $(".forgotInput").hide(100);
        }else{
            alert("CheckBox Not Clicked");
        }
    }else{
        alert('Email Field Is Required');
    }
};

// Sign Up Details
var signupbuttonClicked = () => {
    console.log("sign Button Is Clicked");
}

$(document).ready(function(){
    $("#signContainerShow").click(()=>{
        $(".signUpInputDetails").show(150);
        $(".loginInputDetails").hide(200);
    });
    $("#loginRedirect").click(()=>{
        $(".signUpInputDetails").hide(150);
        $(".loginInputDetails").show(200);
    });
    $("#loginRedirecttoMain").click(()=>{
        $(".forgetpwdContainer").hide(100);
        $(".loginInputDetails").show(200);
    })
    $(".forgotpwd").click(()=>{
        $(".signUpInputDetails").hide(150);
        $(".loginInputDetails").hide(200);
        $(".forgetpwdContainer").show(100);
    });
    reGenerateCapcha();
    resendOtpBtn();
});




loadSelectedPage('index');  //onload of page, index page will be shown by default

