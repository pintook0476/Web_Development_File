var validatePwd = (event) => {
    var charLength = document.querySelector("#validPwd").value;
    var result = charLength.length;
    if(result == 8){
        document.querySelector(".charLength").style.color = "green";
    }else{
        document.querySelector(".charLength").style.color = "red";
    };

    if(charLength[0] == charLength[0].toUpperCase()){
        document.querySelector(".frstUpperCase").style.color = "green";
    }else{
        document.querySelector(".frstUpperCase").style.color = "red";
    };


};


var count = 0;


var validatePassword = (event) =>{
    console.log(event);
   if(event.keyCode >= 48 && event.keyCode <= 57){
    document.querySelector(".numberShould").style.color = "green";

   }else{
    document.querySelector(".numberShould").style.color = "red";
   };

   if(event.keyCode >= 31 && event.keyCode <= 47){
    count++;
   };

   if(count == 1){
    document.querySelector(".specialChar").style.color = "green";
   }else{
    document.querySelector(".specialChar").style.color = "red";
   };

};
 
