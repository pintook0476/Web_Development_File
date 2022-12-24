var empDetails = {
    getPfandHra () {
        this.pf = (10/100)*this.basicSalary;
        this.hra = (15/100)*this.basicSalary;
    },
    getTotalsalary (){
        this.totalSalary = this.basicSalary+this.pf+this.hra;
    },
    getTax () {
        if(this.gender == 'Male'){
            if(this.totalSalary>=200000){
                this.tax = (20/100)*this.totalSalary;
            }else if(this.totalSalary>=100000){
                this.tax = (10/100)*this.totalSalary;
            }else{
                this.tax = (5/100)*this.totalSalary;
            }
        }else{
            if(this.totalSalary>=200000){
                this.tax = (10/100)*this.totalSalary;
            }else if(this.totalSalary>=100000){
                this.tax = (5/100)*this.totalSalary;
            }else{
                this.tax = 0;
            }
        }
    },
    readEmpdetails () {
        this.name = document.querySelector("#ename").value;
        this.age = document.querySelector("#eage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.basicSalary = document.querySelector("#ebs").value;
        this.basicSalary = parseInt(this.basicSalary);
        this.getPfandHra();
        this.getTotalsalary();
        this.getTax();
        this.displayDetails();
    },
    displayDetails () {
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dbs").innerText = this.basicSalary;
        document.querySelector("#dpf").innerText = this.pf;
        document.querySelector("#dhra").innerText = this.hra;
        document.querySelector("#dts").innerText = this.totalSalary;
        document.querySelector("#dtax").innerText = this.tax;
        document.querySelector(".fcon").style.display="block";
        document.querySelector("#con").style.display="none";

    }
}