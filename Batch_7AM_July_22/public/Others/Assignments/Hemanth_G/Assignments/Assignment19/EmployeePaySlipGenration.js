var employeeDetails = {
    getPfAndHra () {
        this.pf = this.basicSalary * (10 / 100);
        this.hra = this.basicSalary * (20 / 100);
    },
    gettotalSalary() {
        this.totalSalary = this.basicSalary + this.pf + this.hra;
    },
    getTax() {
        if (this.gender == 'male') {
            if (this.totalSalary >= 200000) {
                this.tax = (15 / 100) * this.totalSalary;
            } else if (this.totalSalary >= 100000) {
                this.tax = (10 / 100) * this.totalSalary;
            } else if (this.totalSalary >= 50000) {
                this.tax = (5 / 100) * this.totalSalary;
            }
        } else {
            if (this.totalSalary >= 200000) {
                this.tax = (10 / 100) * this.totalSalary;
            } else if (this.totalSalary >= 100000) {
                this.tax = (5 / 100) * this.totalSalary;
            } else {
                this.tax = 0;
            }
        }
    },
    readEmployeeDetails () {
        this.name = document.querySelector("#eName").value;
       if (!this.name) {
            document.querySelector(".nameMandateErr").style.display="block";
            return;
        } 
        this.age = document.querySelector("#eAge").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.basicSalary = parseInt(document.querySelector("#eBasic").value);
        this.getPfAndHra();
        this.gettotalSalary();
        this.getTax();
        this.displayDetails();
    },
    displayDetails() {
        document.querySelector(".paySlipBlock").style.display="block";
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dBasic").innerText = this.basicSalary;
        document.querySelector("#dpf").innerText = this.pf;
        document.querySelector("#dhra").innerText = this.hra;
        document.querySelector("#dtotal").innerText = this.totalSalary;
        document.querySelector("#dtax").innerText = this.tax;
    }
};