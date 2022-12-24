var charcodefinder =(event) =>{
    console.log(event.keyCode); 
}

var validatepassword = (event) => {
    //length
    var length  = document.querySelector("#passwrd").value.length;
        if(length == 8) {
            document.querySelector(".eightChar").classList.remove("error")
            document.querySelector(".eightChar").classList.add("valid")
        }else{
            document.querySelector(".eightChar").classList.add("error")
            document.querySelector(".eightChar").classList.remove("valid")
        }
    //uppercase 
    var value = document.querySelector("#passwrd").value 
        if(value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
            document.querySelector(".upperCase").classList.remove("error");
            document.querySelector(".upperCase").classList.add("valid");
        }else{
            document.querySelector(".upperCase").classList.add("error")
            document.querySelector(".upperCase").classList.remove("valid")
        }
    //symbol
    count = 0;
    for (var i = 0; i<length; i++){
        if(value.charCodeAt(i)>=32 && value.charCodeAt(i)<=126){
            if(value.charCodeAt(i)<=47){
                count++;
            }else if(value.charCodeAt(i)>=58 && value.charCodeAt(i)<=64){
                count++;
            }else if(value.charCodeAt(i)>=91 && value.charCodeAt(i)<=96){
                count++;
            }else if(value.charCodeAt(i)>=123){
                count++;
            }
        }
    }
    if(count ==1){
        document.querySelector(".onlySymbol").classList.remove("error");
        document.querySelector(".onlySymbol").classList.add("valid");
    }else{
        document.querySelector(".onlySymbol").classList.add("error")
        document.querySelector(".onlySymbol").classList.remove("valid")
    }

    //minnumber

    numcount = 0;
    for(i=0; i<length; i++){
        if(value.charCodeAt(i) >=48 && value.charCodeAt(i) <=57){
            numcount++
        }
    }
    if(numcount>0){
        document.querySelector(".minNumber").classList.remove("error");
        document.querySelector(".minNumber").classList.add("valid");
    }else{
        document.querySelector(".minNumber").classList.add("error")
        document.querySelector(".minNumber").classList.remove("valid")
    }

    //endnumber 

    if(value.charCodeAt(length-1)>=48 && value.charCodeAt(length-1)<=57){
        document.querySelector(".endNumber").classList.remove("error");
        document.querySelector(".endNumber").classList.add("valid");
    }else{
        document.querySelector(".endNumber").classList.add("error")
        document.querySelector(".endNumber").classList.remove("valid")
    }

}