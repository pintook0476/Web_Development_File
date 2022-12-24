var employeedetails = {
     gettingValues() {
        this.dname = document.querySelector("#fname").value;
        this.laName = document.querySelector("#lastname").value;
        this.age = document.querySelector("#age").value;
        this.year = document.querySelector("#year").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.role = document.querySelector("#role").value;
        this.salary= document.querySelector("#salarybasic").value;
        this.salary = parseInt(this.salary);
            this.pfandHra();
        
    },

    pfandHra() {
        this.pf = "14%";
        this.hra = "24%";

        this.pfp = (this.salary * 14) / 100;
        this.hrap = (this.salary * 24) / 100;
        this.totalSalary = this.salary + this.pfp + this.hrap;
        console.log(this.totalSalary);
        this.taxCalc();
    },

    taxCalc (){

       if(this.gender == "Male"){

            if(this.totalSalary >= 200000){
                this.taxp = "15%";
                this.totaltax = this.totalSalary * (15 / 100);
            }else if(this.totalSalary >= 100000 ){
                this.taxp = "10%";
                this.totaltax = this.totalSalary * (10 / 100);
            }else if (this.totalSalary >= 50000 ) {
                this.taxp = "5%";
                this.totaltax = this.totalSalary * (5 / 100 );
            } else {
                this.taxp = "no tax";
            }
        }else{
            
            if (this.totalSalary >= 200000 ){
                this.taxp = "10%";
                this.totaltax = this.totalSalary * (10 / 100);
            } else if (this.totalSalary >= 100000 ){
                this.taxp = "5%";
                this.totaltax = this.totalSalary * (5 / 100)
            }else {
                this.taxp = " no tax"
            }

            
        }
        console.log(this.totaltax);
        
        this.finalsalary = this.totalSalary - this.totaltax;
        console.log(this.finalsalary);
        this.displayingvalues();
    },
    
    displayingvalues() {
        document.querySelector("#dname").innerHTML = this.dname + " " +this.laName;
        document.querySelector("#dage").innerHTML = this.age;
        document.querySelector("#dyear").innerHTML = this.year;
        document.querySelector("#dgender").innerHTML = this.gender;
        document.querySelector("#drole").innerHTML = this.role;
        document.querySelector("#dBasicSal").innerHTML = this.salary;
        document.querySelector("#dpf").innerHTML = this.pf;
        document.querySelector("#dhra").innerHTML = this.hra;
        document.querySelector("#dTotalSal").innerHTML = this.totalSalary;
        document.querySelector("#dtax").innerHTML = this.taxp;
        document.querySelector("#dFinalSal").innerHTML = this.finalsalary;
        document.querySelector(".payslip").style.display = 'block';
        document.querySelector(".container").style.display = 'none';

    }

}