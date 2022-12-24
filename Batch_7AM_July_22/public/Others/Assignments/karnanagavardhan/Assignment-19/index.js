
var  employedetails ={

    readEmpData () {
        this.name = document.querySelector("#ename").value;
        this.age  = document.querySelector("#eage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.basicsalary =document.querySelector("#ebs").value;
        this.basicsalary = parseInt(this.basicsalary);
        this.getPfAndHra();
        this.getTotal();
        this.getTax();
        this.displayData();

    },
    getPfAndHra (){
        this.pf = 10/100 * this.basicsalary;
        this.hra = 15/100 * this.basicsalary;


    },
    getTotal () {
        this.total = this.pf+this.basicsalary+this.hra;

    },
    getTax () {
        if (this.gender=="Male"){
            if (this.total>= 200000) {
                this.tax = 15/100* this.total; 
                
            }else if(this.total>= 100000){
                this.tax = 10/100* this.total;
            }else {
                this.tax = 5/100* this.total;
            }


        }else {
            if(this.total >= 200000){
                this.tax = 10/100 *this.total;
            }else if (this.total>= 100000){
                this.tax = 5/100 *this.total; 
            }else{
                this.tax = 0;
            }
        }

    },
    displayData () {
        document.querySelector("#dname").innerText=this.name;
        document.querySelector("#dage").innerText=this.age;
        document.querySelector("#dg").innerText=this.gender;
        document.querySelector("#dbs").innerText=this.basicsalary;
        document.querySelector("#dpf").innerText=this.pf;
        document.querySelector("#dhra").innerText=this.hra;
        document.querySelector("#dts").innerText=this.total;
        document.querySelector("#dtax").innerText=this.tax;
        document.querySelector(".hide").style.display="block";

    }

}