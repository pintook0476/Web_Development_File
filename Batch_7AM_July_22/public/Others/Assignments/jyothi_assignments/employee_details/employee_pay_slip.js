var empDetails = {
    salaryCal() {
        this.pf = (this.basicpay * 5 ) / 100;
        this.hra = (this.basicpay * 10) / 100;
        this.total = this.basicpay + this.hra + this.pf;
        
    },
    readData() {
        this.name = document.querySelector("#ename").value;
        this.id = document.querySelector("#empid").value;
        this.age = document.querySelector("#eage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.dept = document.querySelector("#edept").value;
        this.basicpay = document.querySelector("#empbs").value;
        this.basicpay = parseInt(this.basicpay);
        this.salaryCal();
        this.displayDetails();
    },
    
    displayDetails() {
        document.querySelector("#disname").innerHTML = this.name;
        document.querySelector("#disID").innerHTML =  this.id;
        document.querySelector("#disage").innerHTML = this.age;
        document.querySelector("#disgender").innerHTML = this.gender;
        document.querySelector("#disdept").innerHTML = this.dept;
        document.querySelector("#disbasicpay").innerHTML = this.basicpay;
        document.querySelector("#dispf").innerHTML = this.pf;
        document.querySelector("#dishra").innerHTML = this.hra;
        document.querySelector("#distotalsal").innerHTML = this.total;
        
    }
    }
    