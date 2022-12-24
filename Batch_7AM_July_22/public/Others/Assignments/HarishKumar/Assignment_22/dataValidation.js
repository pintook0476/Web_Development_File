

let formValidation = () => {
    let user = document.querySelector('#user_name').value
    let email = document.querySelector('#email').value
    let mobile = document.querySelector('#number').value
    let password = document.querySelector('#password').value
    let con_password = document.querySelector('#con_password').value

    // User Name Validation
    if (user == "") {
        document.querySelector('#user_err').innerHTML = "Please fill in the User Name"
        return false;
    }
    if ((user.length <= 3) || (user.length > 15)) {
        document.querySelector('#user_err').innerHTML = "User Name length must be between 4 and 20"
        return false;
    }
    if (!(isNaN(user))) {
        document.querySelector('#user_err').innerHTML = "Only Alphabets Allowed"
        return false;
    }

    // E-mail Validation
    if (email == "") {
        document.querySelector('#email_err').innerHTML = "Please fill in the Email"
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.querySelector('#email_err').innerHTML = "Invalid E-mail @ is not Correct Position"
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.querySelector('#email_err').innerHTML = "Invalid E-mail . is not Correct Position"
        return false;
    }


    // Mobile Number Validation
    if (mobile == "") {
        document.querySelector('#number_err').innerHTML = "Please fill in the Mobile"
        return false;
    }
    if (isNaN(mobile)) {
        document.querySelector('#number_err').innerHTML = "Only Numbers Allowed"
        return false;
    }
    if (mobile.length !== 10) {
        document.querySelector('#number_err').innerHTML = "Mobile Number Should be 10 Digit"
        return false;
    }

    // Password Validation
    if (password == "") {
        document.querySelector('#pass_err').innerHTML = "Please fill in the Password"
        return false;
    }
    if ((password.length <= 4) || (user.length > 8)) {
        document.querySelector('#pass_err').innerHTML = "Password length must be between 4 and 8"
        return false;
    }


    // Confirm Password Validation
    if (con_password == "") {
        document.querySelector('#con_pass_err').innerHTML = "Please fill in the Confirm Password"
        return false;
    }
    if (password !== con_password) {
        document.querySelector('#con_pass_err').innerHTML = "Password Are Not matching"
        return false;
    }

}

let inpCaptcha = document.querySelector('#inpCaptcha').value

function captchaCode() {
    let otpValue = "";
    for (let i = 0; i < 5; i++) {
        let RandomNum = Math.floor(Math.random() * 10);
        otpValue += RandomNum;
        document.querySelector('.captcha').innerHTML = otpValue;
    }
}
captchaCode();

function verifyCap() {
    if ((document.querySelector('#inpCaptcha').value) != (document.querySelector('.captcha').innerHTML)) {
        document.querySelector('#captcha_err').innerHTML = "Please Enter The Captcha"
        return false;
    } else {
        document.querySelector('#captcha_err').innerHTML = "Verified"
    }
}

