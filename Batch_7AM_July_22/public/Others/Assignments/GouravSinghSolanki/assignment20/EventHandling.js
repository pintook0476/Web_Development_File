 function sdetails (p) {
    function input() {
        
        document.querySelector("#name").innerText = document.querySelector("#sName").value ;
        document.querySelector("#age").innerText = document.querySelector("#sAge").value ;
        document.querySelector("#gender").innerText = document.querySelector("#sGender").value ;
        document.querySelector("#class").innerText = document.querySelector("#sClass").value + "th" ;

        subjectcalculation.hindi =parseInt( document.querySelector("#hindi").value) ;
        subjectcalculation.english = parseInt(document.querySelector("#english").value) ;
        subjectcalculation.maths = parseInt(document.querySelector("#maths").value) ;
        subjectcalculation.science = parseInt(document.querySelector("#science").value) ;
        subjectcalculation.social = parseInt(document.querySelector("#social").value) ;
        subjectcalculation.sanskrit = parseInt(document.querySelector("#sanskrit").value) ;
        subjectcalculation.calculation();

    } 
    function click(p){
        document.querySelector(p).style.border = "1px solid" ;
        document.querySelector(p).style.backgroundColor = "white" ;
        document.querySelector(p).style.color = "black" ;
        if(p = "#submit"){
            document.querySelector(".section1").style.display = "none";
            document.querySelector(".section2").style.display = "block";
        } else{
            document.querySelector("section2").style.display = "none";
            document.querySelector("section1").style.display = "block";
        }
    }
    click(p);
    input();
}

var subjectcalculation = {
    calculation(){
        this.total = this.english + this.hindi + this.science + this.social + this.maths + this.sanskrit ;
        this.avg = this.total / 6 ;
        if(this.avg > 50){
            this.grade = "pass";
        } else
        this.grade = "pass";
        document.querySelector("#marks").innerText = this.total ;
        document.querySelector("#avg").innerText = this.avg ;
        document.querySelector("#grade").innerText = this.grade ;
    }
};
