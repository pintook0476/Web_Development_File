var signupNewUser = () => {
    var userInfo = {};
    userInfo.accountId = $("#accntId").val();
    userInfo.accountPassword = $("#acctPwd").val();
    userInfo.mailId = $("#acctMailId").val();

    $.ajax({
        url: '/add/new/User',
        method: 'POST',
        dataType: 'JSON',
        data: userInfo,
        success:(response) => {
            if (response.msg == 'Success') {
                $(".signupMsgBlock").show(1000);
                $("#msg").html('Successfly got registerd');
            }
        },
        error: (error) => {

        }
    });
    console.log(userInfo);
}