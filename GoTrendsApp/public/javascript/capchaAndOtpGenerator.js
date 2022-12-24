var chapchaOtpLib  = (() => {
    var charsSet = ["A" , "B", "C", "D", "E","F","G","L","R","T","V","X","Z"];
    var charsSet_lowerCase = ["j", "k", "m","p","y","u","h","i","n","o","q","s","w"];
    var generateOTP = () => {
        var otpValue = '';
        for (var i = 0 ; i < 5; i++) {
            var randomNo = Math.random() * 10;
            randomNo = Math.floor(randomNo);
            otpValue = otpValue + randomNo;
        }
        document.querySelector(".container").innerHTML = otpValue;
    }

    var getRandomNumber = () => {
        var randomNo = Math.random() * 10;
        randomNo = Math.floor(randomNo);
        return randomNo;
    }


    var getRandomChar = () => {
        var index = Math.floor(Math.random() * charsSet.length);
        return charsSet[index];
    }
    var getRandomChar_lowerCase = () => {
        var index = Math.floor(Math.random() * charsSet_lowerCase.length);
        return charsSet_lowerCase[index];
    }
     
    return {
        generateCapcha : () => {
            var capcha = '';
            capcha += getRandomNumber();
            capcha += getRandomChar();
            capcha += getRandomNumber();
            capcha += getRandomChar_lowerCase();
            capcha += getRandomChar();
            return capcha;    
        }
    }
})();

