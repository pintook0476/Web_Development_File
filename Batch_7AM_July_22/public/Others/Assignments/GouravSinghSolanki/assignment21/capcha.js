var capcha = "" ;
var data = () =>{
    var charList = ['a','b','c','d','e','f','g'];
    for(i=0; i < 5 ; i++){
        if(i ==  0 || i == 4){
            var random = Math.random(Number)*charList.length;
            random = Math.floor(random);
            capcha = capcha + charList[random];
        } else{
            var random = Math.random(Number)*10;
            random = Math.floor(random);
            capcha = capcha + random ;
        }
    }
    document.querySelector("#showdata").innerText = capcha;
}
data();
var reset = () => {
    capcha = "";
    data();
}
var readData = () => {
    var inputCapcha = document.querySelector("#inputCapcha").value;
    console.log(capcha);
    if(inputCapcha == capcha){
        document.querySelector('#slogin').classList.remove("hide");
    }
}

