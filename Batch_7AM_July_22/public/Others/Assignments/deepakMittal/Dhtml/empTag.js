var getEmpDetails = {
    getDetailsFromUser : function(){
    this.empName = 'Deepak Mittal';
    this.age = 22;
    this.gender = "Male";
    this.location = "Hyderabad";
    this.basicSalary = 10000;
    this.calHraPfOfEmp();
    },

    calHraPfOfEmp : function(){
        this.empHra = (this.basicSalary * 15) / 100;
        this.empPf = (this.basicSalary * 10) / 100;
        totalSalary = this.basicSalary + this.empHra + this.empPf;   
        this.calIncomeTax();
    },

    calIncomeTax : function(){
        this.incomeTaxRate = 0;
        if(getEmpDetails.gender == "male"){
            incomeTaxRate = 10;
        }else{
            incomeTaxRate = 5;
        };

        this.incomeTaxOfEmp = this.totalSalary * this.incomeTaxRate / 100;
        this.salaryAfterTax = this.totalSalary - this.incomeTaxOfEmp;
        this.displayDetails();
    },
    

    displayDetails : function() {
        console.log("Employee Details");
        console.log("Emp Name - " + this.empName);
        console.log("Emp Age - " + this.age);
    }
};
 getEmpDetails.getDetailsFromUser();