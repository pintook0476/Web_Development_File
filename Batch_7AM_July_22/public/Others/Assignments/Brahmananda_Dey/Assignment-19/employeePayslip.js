var empDetails={
    empdata(){
        this.name=document.querySelector("#empName").value 
        this.age=document.querySelector("#empAge").value 
        this.gender=document.querySelector("input[name=Gender]:checked").value
        this.dep=document.querySelector("#empDep").value
        this.basicSalary=document.querySelector("#bSalary").value
        this.basicSalary=parseInt(this.basicSalary)
        this.calculation();
        this.displayPlaySlip();
      
    },
    calculation(){
        this.totalSalary=0
        this.pf=this.basicSalary*12/100;
        this.hra=this.basicSalary*15/100;
        this.totalSalary=(this.basicSalary+this.pf+this.hra)
        this.condition()
    },
  
    condition(){
        if(empDetails.gender=="Male"){
            if(empDetails.totalSalary>=200000){
               empDetails.tax=(this.totalSalary)*15/100;
            }
            else if(empDetails.totalSalary>=100000){
                this.tax=(this.totalSalary)*10/100;
            }
            else if(empDetails.totalSalary>=50000){
                this.tax=(this.totalSalary)*5/100;
            }
            else{
                this.tax="0"
            }
        }
        else{
            if(empDetails.totalSalary>=200000){
                this.tax=(this.otalSalary)*10/100
            }
            else if(empDetails.totalSalary>=100000){
                this.tax=(this.totalSalary)*5/100;
            }
            else if(empDetails.totalSalary>=50000){
                this.tax="0"
            }
            else{
                this.tax="not to pay"
            }
        }
       
    },

    displayPlaySlip(){
        
        document.querySelector("#eName").innerHTML=this.name
        document.querySelector("#eAge").innerHTML=this.age
       document.querySelector("#eGender").innerHTML=this.gender
       document.querySelector("#eDep").innerHTML=this.dep
       document.querySelector("#eSalary").innerHTML=this.basicSalary
       document.querySelector("#eTotalSalary").innerHTML=this.totalSalary
      document.querySelector("#eTax").innerHTML=this.tax

      document.querySelector("#empName").value=' '
      document.querySelector("#empAge").value=' '
      document.querySelector("input[name=Gender]:checked").value=' '
      document.querySelector("#empDep").value=' '
      document.querySelector("#bSalary").value=' '
    
        
      document.querySelector(".dBlock").style.display="block"
    }

}
