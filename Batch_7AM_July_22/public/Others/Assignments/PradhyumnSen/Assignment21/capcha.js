var capcha = "";
var data = () => {
     capcha = "";
    var char = ["a","b","c","d","e","f","g"];
    for (i = 0; i < 5; i++) {
        if( i == 0 || i == 3){
        
            var n = Math.random(Number) * char.length;
            n = Math.floor(n);
            capcha = capcha + char[n];
        }else{
            var n = Math.random(Number) * 10;
            n = Math.floor(n);
            capcha = capcha + n;

        }
        }
    document.querySelector("#capchagenerate").innerText = capcha;
}
data();
document.querySelector(".block2").classList.add('hide');
    
var readCapcha = () => {
    var inputCapcha = document.querySelector("#value").value;
    if(capcha == inputCapcha ){
        document.querySelector("#message").innerText = " right input ";
    } else{
       document.querySelector("#message").innerText = "wrong input";
    }
    document.querySelector(".block1").classList.add('hide');
    document.querySelector(".block2").classList.remove('hide');
}

