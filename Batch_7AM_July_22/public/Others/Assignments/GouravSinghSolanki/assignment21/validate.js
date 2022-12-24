var validate = (event) => {
    var inputVal = document.querySelector("#password").value ;
    var length = inputVal.length ;
    if(length == 8){
        document.querySelector("#passwrdLength").classList.add("valid");
    } else
        document.querySelector("#passwrdLength").classList.remove("valid");
        
    if(inputVal[0] === inputVal[0].toUpperCase()){
        document.querySelector("#uppercase").classList.add("valid");
    } else{
        document.querySelector("#uppercase").classList.remove("valid");
    }
        
           
}
var count = 0 ;
var count2 = 0 ;
var lastChar = (event) => {
    if(event.keyCode >= 48 && event.keyCode <= 57){
        document.querySelector("#endsWith").classList.add("valid");
        count++;
    } else{
        document.querySelector("#endsWith").classList.remove("valid");
    }
    if(count >= 1){
        document.querySelector("#num").classList.add("valid");
    } else{
        document.querySelector("#num").classList.remove("valid");
    }
    if(event.keyCode >=32 && event.keyCode <= 47){
        count2++;
    }
    if(count2 == 1){
        document.querySelector("#symbol").classList.add("valid");
    } else{
        document.querySelector("#symbol").classList.remove("valid");
    }
}
    

