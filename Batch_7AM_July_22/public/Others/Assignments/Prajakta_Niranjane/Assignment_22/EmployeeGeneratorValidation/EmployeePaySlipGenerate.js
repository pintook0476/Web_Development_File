var employeeData = {
    readEmployeeData () 
    {
        this.name = document.querySelector("#name").value;
        this.age = document.querySelector("#age").value;
        this.employeeId = document.querySelector("#eid").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.department = document.querySelector("#dept").value;
        this.empsal = document.querySelector("#empsal").value;
        this.empsal = parseInt(this.empsal);
        this.getCurrentDate ();
        this.PfAndHraCalculation();
    },
   getCurrentDate ()
    {
        this.myCurrentDate = new Date();
        this.dateMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.index = this.myCurrentDate.getMonth();
        this.date = this.dateMonths[this.myCurrentDate.getMonth()] +', ' + this.myCurrentDate.getFullYear();
   },
    PfAndHraCalculation ()
    {
        this.pf = this.empsal * (14 / 100);
        this.hra = this.empsal * (24 / 100);
        this.totalsal = this.pf + this.hra + this.empsal ;
        this.taxCalculation();
    },
    taxCalculation () 
    {
        this.taxper = 0;
        if (this.gender == "Male" || this.gender == "male" ) {
                    if (this.totalsal >= 200000) {
                        this.taxper = 15;
                        this.tax = this.totalsal * (15 / 100);
                    }
                    else if ( this.totalsal >= 100000 && this.totalsal < 200000) {
                        this.taxper = 10;
                        this.tax = this.totalsal * (10 / 100); 
                    } 
                    else if (this.totalsal >= 50000 && this.totalsal < 100000) {
                        this.taxper = 5;
                        this.tax = this.totalsal * (5 / 100);
                    }
                    else {
                        this.tax = 0;
                    }
            }
            else {
                    if (this.totalsal >= 200000) {
                        this.taxper = 10;
                        this.tax = this.totalsal * (10 / 100);   
                    }
                    else if (this.totalsal >= 100000 && this.totalsal < 200000) {
                        this.taxper = 5;
                        this.tax = this.totalsal * (5 / 100);  
                    } 
                    else if (this.totalsal >= 50000 && this.totalsal < 100000) {
                        this.tax = 0; 
                    }
                    else {
                        this.tax = 0;
                    }
            }
                this.inHandsalary = this.totalsal - this.tax ;   
    },
    displayEmpDetails() 
    {
        this.readEmployeeData();
        document.querySelector("#dDate").innerHTML = this.date;
        document.querySelector("#dName").innerHTML = this.name;
        if (!this.name){
            document.querySelector(".nameMandate").style.display = "block";
            return;
        }else{
            document.querySelector(".nameMandate").style.display = "none";
        }
        document.querySelector("#dEmpId").innerHTML = this.employeeId;
        if (!this.employeeId){
            document.querySelector(".idMandate").style.display = "block";
            return;
        }else{
            document.querySelector(".idMandate").style.display = "none";
        }
        document.querySelector("#dAge").innerHTML = this.age;
        document.querySelector("#dGender").innerHTML = this.gender;
        document.querySelector("#dDepartment").innerHTML = this.department;
        document.querySelector("#dBasicSal").innerHTML = '₹' + this.empsal;
        if (!this.empsal){
            document.querySelector(".salMandate").style.display = "block";
            return;
        }else{
            document.querySelector(".salMandate").style.display = "none";
        }
        document.querySelector("#dPF").innerHTML = '₹' + this.pf;
        document.querySelector("#dHRA").innerHTML = '₹' + this.hra;
        document.querySelector("#dTotalSal").innerHTML = '₹' + this.totalsal;
        document.querySelector("#dTaxPer").innerHTML = this.taxper + ' %';
        document.querySelector("#dTax").innerHTML = '₹' + this.tax;
        document.querySelector("#dInHandSal").innerHTML = '₹' + this.inHandsalary;
        document.querySelector(".mainContainer").style.display = "none";
        document.querySelector(".displayBlock").style.display = "block";

    }

};
var generatePaySlip = () => {
      employeeData.displayEmpDetails();
}