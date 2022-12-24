
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const hideShow = document.querySelector('#hideShow');
const cross = document.querySelector('.icon1');
const check = document.querySelector('.icon2');
const error = document.querySelector('.error');
const btn = document.querySelector('button');

let regExp = (/^[^ ]+@[^ ]+\.[a-z]{2, 3}$/);

function emailCheck() {
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        cross.style.display = 'none';
        check.style.display = 'none';
        error.style.display = 'none';
        btn.style.display = 'none';
    }
    else if (email.value.match(regExp)) {
        console.log(email.value);
        email.style.borderColor = "#27ae60"; // green
        check.style.display = 'block';
        cross.style.display = 'none';
        error.style.display = 'none';
        btn.style.display = 'block';
    } else {
        email.style.borderColor = "#e74c3c"; // red
        cross.style.display = 'block';
        check.style.display = 'none';
        error.style.display = 'block';
        btn.style.display = 'none';
    }
}
function passCheck() {
    if (password.value == "") {
        password.style.borderColor = "lightgrey";
        error.style.display = 'none';
        hideShow.style.display = 'none';
        error.innerHTML = "**Fill the password please!";

    }
    else if ((password.value.length <= 6)) {
        error.style.display = 'none';
        password.style.borderColor = "#27ae60";
        hideShow.style.display = 'block';
        btn.style.display = 'block';
    }
    else {
        password.style.borderColor = "#e74c3c";
        error.style.display = 'block';
        error.innerHTML = "**Password length must be 6 characters";
        btn.style.display = 'none';
    }
}

hideShow.addEventListener('click', function () {
    if (password.type == 'password') {
        password.type = 'text'
    } else {
        hideShow.style.display = 'block';
        password.type = 'password'
    }
    this.classList.toggle('icon4')
});
