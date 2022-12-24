var empDetails = {
    readEmpData: function () {

        empDetails.name = document.querySelector("#name").value;
        this.age = document.querySelector("#age").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.basicsal = document.querySelector("#basicsalary").value;
        this.basicsal = parseInt(this.basicsal);
        this.pf;
        this.hra;
        this.total;
        this.getpfAndHra();
    },
    getpfAndHra: function () {
        this.pf = this.basicsal * (14 / 100);
        this.hra = this.basicsal * (25 /100);
        this.total = this.basicsal + this.pf + this.hra;
        this.calculateTax();
    },
    calculateTax: function () {
        this.taxpercent = 0;
        if (this.gender == "Male") {
            if (this.total >= 200000){
                this.taxpercent = 15
            } else if (this.total >= 100000){
                this.taxpercent = 10
            } else if (this.total >= 50000){
                this.taxpercent = 5
            }
        }
        if (this.gender == "Female") {
            if (this.total >= 200000){
                this.taxpercent = 10
            } else if (this.total >= 100000){
                this.taxpercent = 5
            }
        }
        this.taxTobePaid = (this.taxpercent * this.total) / 100;
        this.total = this.total - this.taxTobePaid;
        this.displayEmpData();
    },
    displayEmpData: function () {
        document.querySelector(".displaybox").style.display = 'block';
        document.querySelector("#dname").innerHTML = this.name
        document.querySelector("#dage").innerHTML = this.age
        document.querySelector("#dgender").innerHTML = this.gender
        document.querySelector("#dbasicsalary").innerHTML = this.basicsal
        document.querySelector("#dpf").innerHTML = this.pf
        document.querySelector("#dhra").innerHTML = this.hra
        document.querySelector("#dtotal").innerHTML = this.total
        document.querySelector("#dtax").innerHTML = this.taxTobePaid
        
    }
} 