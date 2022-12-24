 var empData = {
    empDetails () {
      this.empName = document.querySelector("#uname").value
      this.empGender = document.querySelector("input[name=gender]:checked").value
      this.empAge = document.querySelector("#uage").value
      this.empBsal = parseInt(document.querySelector("#uBasicsal").value)
      this.empCalculation ()
   } ,
   empCalculation () {
      this.empPf =  this.empBsal * 0.12
      this.emphra = this.empBsal * 0.24
      this.emptsalary = this.empBsal + this.empPf +this.emphra
      this.empAsal    = this.emptsalary * 12
      this.empTax()  
 },
   empTax(){
      if (this.gender == "Male") {
        if (this.empAsal >500000) {
         this.empTax = this.empAsal * 0.15
       }else if (this.empAsal > 300000) {
         this.empTax = this.empAsal * 0.10
      }
    } else {
         if (this.empAsal > 300000) {
         this.empTax = this.empAsal * 0.10
       }else {
         this.empTax = 0
         }
   } 
   this.employeePaySlip ()
   },
    employeePaySlip  ()  {
      document.querySelector(".dblock").style.display = "block"
      document.querySelector(".rblock").style.display = "none"
      document.querySelector("#d_name").innerText = this.empName
      document.querySelector("#d_age").innerText=this.empAge
      document.querySelector("#d_gender").innerText = this.empGender
      document.querySelector("#d_msal").innerText = this.emptsalary
      document.querySelector("#d_asal").innerText = this.empAsal
      document.querySelector("#d_tax").innerText = this.empTax
     }  
 }
