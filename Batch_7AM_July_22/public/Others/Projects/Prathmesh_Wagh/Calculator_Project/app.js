var calculator = {
    readvalue () {
        var firstval = document.querySelector("#fval").value;
        firstval = parseInt(firstval);

        var secondval = document.querySelector("#sval").value;
        secondval = parseInt(secondval);

        var Choice = document.querySelector("#operator").value;

        document.querySelector("#rs").innerHTML = Sum;
        
        switch (Choice) {
            case '+' :
                Sum = firstval + secondval;
                break;
            
            case '-' :
                Sum = firstval - secondval;
                break;
            
            case '%' :
                Sum = firstval % secondval;
                break;
    
            case '/' :
                Sum = firstval / secondval;
                break;
    
            case '*' :
                Sum = firstval * secondval;
                break;
    
            default :
                console.log("Wrong Operator Selected");
        }
        this.readvalue()
    }
}