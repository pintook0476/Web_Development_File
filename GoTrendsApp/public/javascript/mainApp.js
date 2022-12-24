var captchaText;
var showSelectedPage = (type) => {
    
    // window.location.hash = "Sample"; // setting hash for selected page...
    // console.log(window.location.hash)
    var templateUrl = 'templates/';
    
    switch(type) {
        case 'login':
            templateUrl += 'loginPage.htm';
            break;
        case 'signup':
            templateUrl += 'newsignup.htm';
            break;
        case 'fgpwd':
            templateUrl += 'forgotPwd.htm';
            break;   
        case 'productDetailsPage':
            templateUrl += 'productDetailsTmplt.htm'
            break;
        case 'addNewProduct':
            window.location.hash = "addNewProduct";
            templateUrl += 'addNewProduct.htm'
            break;
        default:  // bydefault show login 
            type = 'login';
            window.location.hash = "login";
            templateUrl += 'loginPage.htm';
    }

    $.ajax({
        url: templateUrl,
        method: 'GET',
        data: {},
        success: (responseTmplt) => {
            $(".mainContainer").html(responseTmplt);

            if (type == 'login') {
                showCapchaText();
                fillIdPwdDetails();
            } else if (type == 'productDetailsPage') {
                loadProductDetailsData();
            }
        }
    });
}

var validateUserCredentials = () => {
    let userCapchaText = $("#userCapcha").val();
    if (!userCapchaText || (userCapchaText != captchaText)) {
        $(".capchaErr").show();
        // showCapchaText(); // Regenerating capcha text
        return;
    }
    $(".capchaErr").hide();
    var userInput = {};
    userInput.accountId = $("#accntId").val();
    userInput.accountPassword = $("#acctPwd").val();
    var isValidDetails = validateUserIdAndPwd(userInput);

    if (isValidDetails) {
        storeIdPwd(userInput);
        // sendDAtato server
        $("#acntValidationBlock").hide();
        $.ajax({
            url: '/validate/userAccountDetails',
            method: 'POST',
            dataType: 'JSON',
            data: userInput,
            success: (response) => {
                if (response.msg == 'Valid') {
                    let type = 'productDetailsPage';
                    if (response.isAdmin) {
                        type = 'addNewProduct'
                    }   
                    showSelectedPage(type);
                } else {
                    $("#acntValidationBlock").show();
                    $("#acntValidationBlock").html(response.info);

                }
            },
            error: (err) => {
                console.log(err);
            }
        })
    } else { // invalid
        $("#acntValidationBlock").show();
    }
}


var validateUserIdAndPwd = (userInputData) => {
    if (!userInputData.accountId || !userInputData.accountPassword) 
        return false;
    if (userInputData.accountId.length < 5 || userInputData.accountPassword.length != 8) {
        return false;
    }
        
    // Checking for first letter upper case validation
    let firstLetterAscii = userInputData.accountPassword.charCodeAt(0);
    if (firstLetterAscii >= 65 && firstLetterAscii <= 90) {
    } else {
        return false;
    }
    return true; // false
}

var enableLogin = (event) => {
    if ($('#userCapcha').val().length == 5) {
        $("#loginBtn").attr('disabled' , false);
    } else {$("#loginBtn").attr('disabled' , true);

    }
}

$(document).ready(() => {
    var currentHash = window.location.hash;
    currentHash = currentHash.replace('#', '');
    showSelectedPage(currentHash);   
   
});

var showCapchaText = () => {
    $("#capchaText").show();
    captchaText = chapchaOtpLib.generateCapcha();
    $("#capchaText").html("<b>" + captchaText + '</b>');
    

    html2canvas(document.querySelector('#capchaText'), {
        onrendered: function (canvas) {
            var screenshot = canvas.toDataURL('image/png');
            console.log("screenshot")
            console.log(screenshot)
            document.getElementById('captchaImage').setAttribute('src', screenshot);
            $("#capchaText").hide();
        },
    });
}