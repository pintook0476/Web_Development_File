
var employeedetails = {
    //report show &input hide
    showhide(){

    },


    // user input display in report
    inputData() {
        this.empname = document.querySelector("#empName").value
        console.log(this.empname);
        this.team = document.querySelector("#team").value
        console.log(this.team);
        this.sal = document.querySelector("#salary").value
        this.pf = document.querySelector("#pf").value
        this.hra = document.querySelector("#hra").value
        this.dept = document.querySelector("#dept").value
        this.join = document.querySelector("#doj").value

            this.validation()
            this.displayData()
            this.mobile()
            this.totalSalary()
    },

    totalSalary() {
        var tpf = this.sal*(this.pf/100);
        var thra = this.sal * (this.hra / 100);
        var total= this.sal + tpf + thra;
        return total;
    },

    //mobie number patten makeing
    mobile() {
        var phone = document.querySelector("#phone").value
        var arr = []
        for (var i = 0; i < phone.length; i++) {
            arr.push(phone.charAt(i))
        }
        var arr2 = arr.splice(3, 0, " ") + arr.splice(7, 0, " ")
        var newph = arr.toString()
        var phoneNumber = arr.join("")
        console.log(phoneNumber);
        document.querySelector("#phno").innerHTML = phoneNumber;

    },

    displayData() {
        // user data Display
            document.querySelector("#uname").innerHTML = this.empname;
            document.querySelector("#team").innerHTML = this.team;
            document.querySelector("#totalSalary").innerHTML = this.total;
            document.querySelector("#dept").innerHTML = this.dept;
            document.querySelector("#doj").innerHTML = this.doj;

            document.querySelector(".empcard").style.display="block";
            document.querySelector(".wraper").style.display="none";
        },

    validation() {
        if ((document.querySelector("#captcha").innerHTML) != (document.querySelector("#captchaInput").value)) {
            document.querySelector(".error").style.display = "block";
        }else{
            document.querySelector(".error").style.display = "none";
        }
    }
};



window.onload = captchaGenerator = (newOTP) => {
    var otp = Math.floor(Math.random() * 10)
    var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "&", "?"];
    for (var i = 1; i < 6; i++) {
        var result = array[Math.floor(Math.random() * array.length)];
        otp = result + otp

    }
    document.querySelector("#captcha").innerHTML = otp;
    // console.log(otp);
    // window.onload(captchaGenerator())
    var newOTP = otp
    return newOTP;
}

