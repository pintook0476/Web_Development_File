var generateOtp = () => {
    var otpValue = "";
    for(var i = 0; i < 5; i++){
        var alternateno = Math.random() * 10;
        alternateno = Math.floor(alternateno);
        otpValue += alternateno;
    }
    return otpValue;
};

var generateCapcha = () => {
    var capchaValue = "";
    capchaValue += alterCapcha();
    capchaValue += alterNo();
    capchaValue += alterCapcha();
    capchaValue += alterNo();
    capchaValue += alterCapcha();
    return capchaValue;
};
var alterNo = () => {
    var alternativeNo = Math.random() * 10;
    alternativeNo = Math.floor(alternativeNo);
    return alternativeNo;
};
var alterCapcha = () => {
    var charSet = ["A", "b", "E", "#", "E", "z", "y", "G", "v", "t", "K", "u", "a", "1", "g", "Z"];
    var alternativeCapcha = Math.random() * charSet.length;
    alternativeCapcha = Math.floor(alternativeCapcha);
    return charSet[alternativeCapcha];
}