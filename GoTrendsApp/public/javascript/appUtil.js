var changePasswrdContrller = () => {
   /*var isChecked = document.querySelector("#viewPwd").checked;
   console.log(isChecked)
   if (isChecked) {
    document.querySelector("#acctPwd").setAttribute("type", 'text');
   } else {
    document.querySelector("#acctPwd").setAttribute("type", 'password');
   }*/
   var type = document.querySelector("#viewPwd").checked ? 'text' : 'password';
   document.querySelector("#acctPwd").setAttribute("type", type);
}

var storeIdPwd = (userInput) => {
    var isStoreIdPwd = document.querySelector("#rembrIdPwd").checked;
    if (isStoreIdPwd) {
        // store id and pwd witin in localStorage object
        localStorage.setItem("app_userCredentails", JSON.stringify(userInput));
    } else {
        // clear it
        localStorage.removeItem("app_userCredentails");
    }
}

var fillIdPwdDetails = () => {
    if (localStorage.getItem("app_userCredentails") != null) {
        let userData = JSON.parse(localStorage.getItem("app_userCredentails"));
        $("#accntId").val(userData.accountId);
        $("#acctPwd").val(userData.accountPassword);
        document.querySelector("#rembrIdPwd").checked = true;
    }
}