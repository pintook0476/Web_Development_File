class savingAccountDetails{
    constructor(obj){

        this.name = obj.name;
        this.accountnumber = obj.accountnumber;
        this.address = obj.address;
        this.kyc = obj.kyc;
        }
    showDetails(){
        document.querySelector("#outputname").innerText = "Customer Name : " + this.name;
        document.querySelector("#outputnumber").innerText = "Customer Account Number : " + this.accountnumber;
        document.querySelector("#outputaddress").innerText = "Address : " + this.address;
        document.querySelector("#outputkyc").innerText = "Kyc Details : " + this.kyc;
        
        
    }
}

var customerDetails = {};

var userData =() => {
    customerDetails.name = document.querySelector("#cinput").value;
    customerDetails.accountnumber =  document.querySelector("#Anumber").value;  
    customerDetails.address = document.querySelector("#cAddress").value;
    customerDetails.kyc = document.querySelector("#Ekyc").value;

    var newCustomer = new savingAccountDetails (customerDetails);
    newCustomer.showDetails();
    document.querySelector(".hide").classList.remove("hide");
    document.querySelector("#Maincontainer").classList.add("hide");
}


