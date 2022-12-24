
var password = (event) => {
    // start with capital 

    var value = document.querySelector(".enter").value;

    if (value.charCodeAt(0)>= 65 && value.charCodeAt(0)<=90){
        document.querySelector(".cl").classList.remove("red");
        document.querySelector(".cl").classList.add("green");

    }else{
        document.querySelector(".cl").classList.remove("green");
        document.querySelector(".cl").classList.add("red");

    }
    // symbole vlidation
    var cout = 0;
    var length = document.querySelector(".enter").value.length;
    for(var i = 0 ; i < length ; i ++){
        if(value.charCodeAt(i)>=32 && value.charCodeAt(i)<=126){
            if(value.charCodeAt(i)<=47){
                cout++;
            }else if(value.charCodeAt(i)>=58 && value.charCodeAt(i)<=64){
                cout++;
            }else if (value.charCodeAt(i)>=91 && value.charCodeAt(i)<=96){
                cout++;
            }else if (value.charCodeAt(i)>=123){
                cout++;
            }
        }
    }
    if(cout==1){
        document.querySelector(".os").classList.remove("red");
        document.querySelector(".os").classList.add("green");

    }else{
        document.querySelector(".os").classList.remove("green");
        document.querySelector(".os").classList.add("red");

    }

    // minmum 1 number
    var numcout = 0;
    for(var i = 0 ; i < length ; i ++){
        if(value.charCodeAt(i)>=48 && value.charCodeAt(i)<=57){
            numcout++;

        }
    }if(numcout>0 ){
        document.querySelector(".on").classList.remove("red");
        document.querySelector(".on").classList.add("green");
        
    }else{
        document.querySelector(".on").classList.remove("green");
        document.querySelector(".on").classList.add("red");


    }
    // end with number 

    if (value.charCodeAt(length -1)>= 48 && value.charCodeAt(length -1)<=57){
        document.querySelector(".en").classList.remove("red");
        document.querySelector(".en").classList.add("green");

    }else{
        document.querySelector(".en").classList.remove("green");
        document.querySelector(".en").classList.add("red");


    }
    // should be in 8 cha

    if(length == 8){
        document.querySelector(".len").classList.remove("red");
        document.querySelector(".len").classList.add("green");

    }else{
        document.querySelector(".len").classList.remove("green");
        document.querySelector(".len").classList.add("red");

    }



    


}

 