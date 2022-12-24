var passwordValid = (event) => {
    var length = document.querySelector("#floatingInput").value.length
    var input = document.querySelector("#floatingInput").value
    // console.log(input)
    if (length >= 8) {
        document.querySelector(".min").classList.remove('text-danger');
        document.querySelector(".min").classList.add('show');
    } else {
        document.querySelector(".min").classList.remove('show');
        document.querySelector(".min").classList.add('text-danger');
    }
    for (var i = 0; i < length; i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            document.querySelector(".upp").classList.remove('text-danger');
            document.querySelector(".upp").classList.add('show');
        } else {
            document.querySelector(".upp").classList.remove('show');
            document.querySelector(".upp").classList.add('text-danger');
        }
    }
    for (var i = 0; i < length; i++) {
        if (input.charCodeAt(i) >= 32 && input.charCodeAt(i) <= 47 && input.charCodeAt(i) >= 58 && input.charCodeAt(i) <= 64 && input.charCodeAt(i) >= 91 && input.charCodeAt(i) <= 96) {
            document.querySelector(".spe").classList.remove('text-danger');
            document.querySelector(".spe").classList.add('show');
        } else {
            document.querySelector(".spe").classList.remove('show');
            document.querySelector(".spe").classList.add('text-danger');
        }
    }
    for (var i = 0; i < length; i++) {
        if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            document.querySelector(".low").classList.remove('text-danger');
            document.querySelector(".low").classList.add('show');
        } else {
            document.querySelector(".low").classList.remove('show');
            document.querySelector(".low").classList.add('text-danger');
        }
    }
    for (var i = 0; i < length; i++) {
        if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
            document.querySelector(".num").classList.remove('text-danger');
            document.querySelector(".num").classList.add('show');
        } else {
            document.querySelector(".num").classList.remove('show');
            document.querySelector(".num").classList.add('text-danger');
        }
    }

}