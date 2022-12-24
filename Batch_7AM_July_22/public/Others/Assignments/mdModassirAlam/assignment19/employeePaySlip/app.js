class EmployeeDetails {
    constructor(details){
        this.name = details.name;
        this.age = details.age;
        this.gender = details.gender;
        this.location = details.location;
        this.pf = details.pf;
        this.hra = details.hra;
        this.basicSalary = details.basicSalary;
        this.taxTobePaid = details.taxTobePaid;
        this.totalSal1 = details.totalSal1;
    }
    getPfAndHra() {
        this.pf = this.basicSalary * (this.pf/100);
        this.hra = this.basicSalary * (this.hra/100);
        this.getTotalSal();
    }
    getTotalSal() {
        this.totalSal = 0;
        this.totalSal = parseInt(this.basicSalary) + parseInt(this.pf) + parseInt(this.hra);
        this.getTotalTax();
    }
    getTotalTax() {
        var taxPercent = 0;
        // console.log("Total salary " +this.totalSal);
        if(this.gender == 'Male'){  //for male
            if(this.totalSal >= 500000){
                taxPercent = 15;
            }else if(this.totalSal >= 300000){
                taxPercent = 10;
            }else if(this.totalSal >= 100000){
                taxPercent = 5;
            }
        }else{ //for female
            if(this.totalSal >= 500000){
                taxPercent = 10;
            }else if(this.totalSal >= 300000){
                taxPercent = 5;
            }
        }
       
        this.taxTobePaid = (taxPercent * this.totalSal) / 100;
        this.totalSal1 = (this.totalSal - this.taxTobePaid);
        // console.log(this.totalSal1);
    }

    dispalyProductDetails() {
        this.getPfAndHra();
        // this.getTotalTax();
        document.querySelector('.displaydata').style.display = 'block';
        document.querySelector('#dname').innerText = this.name;
        document.querySelector('#dage').innerText = this.age;
        document.querySelector('#dgender').innerText = this.gender;
        document.querySelector('#dlocation').innerText = this.location;
        document.querySelector('#dpf').innerText = this.pf;
        document.querySelector('#dhra').innerText = this.hra;
        document.querySelector('#dbasicSalary').innerText = this.basicSalary ;
        document.querySelector('#dtotalSalary').innerText = this.totalSal ;
        document.querySelector('#dtotalSalaryAfterTax').innerText = this.totalSal1 ;
        document.querySelector('.readdata').style.display = 'none';
    }
          
    }
        var obj = {};
        var generateProductDetails = () => { 
           
        obj.name = document.querySelector("#name").value;
        //    console.log(obj.name)
        obj.age = document.querySelector("#age").value;
        obj.gender = document.querySelector("#gender").value;
        obj.location = document.querySelector("#location").value;
        obj.pf = document.querySelector("#pf").value;
        obj.hra = document.querySelector("#hra").value;
        obj.basicSalary = document.querySelector("#basicSalary").value;
        // this.dispalyProductDetails();
        
        var x = new EmployeeDetails(obj);
        console.log(x);
        x.dispalyProductDetails();
        // this.dispalyProductDetails();
        }

