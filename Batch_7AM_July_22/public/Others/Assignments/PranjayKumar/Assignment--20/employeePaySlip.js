var paySlipData =    {

        readEmpData ()
        {
            
            this.name = document.querySelector("#eName").value;
            this.age = document.querySelector("#eAge").value;
            this.gender = document. querySelector("input[ name= gender]").value;
            this.department = document.querySelector("#eDpt").value;
            this.Basic_Salary = document.querySelector("#eBasicSalary").value;

           this. getCalculatepfAndhra()
          
        },

        getCalculatepfAndhra()
        {        
              this.pf = this.basicSal*(15/100);
                 this.hra = this.basicSal*(25/100);
                 this.totalSal = this.pf + this.hra + this.basicSal;

                 this.getCalculate_Salary_Accordind_Condition();
                
       },


      getCalculate_Salary_Accordind_Condition()
      {
        if(this.gender == 'male' || this.gender == 'Male' || this.gender == 'MALE')
        {
                
              if(this.totalSal >= 20000)
              {
                this.tax = (15/100)*this.totalSal;
                this.newSal = this.totalSal - this.tax;
                
              }

              else if(this.totalSal >= 100000 && this.totalSal < 200000)
              {
                this.tax = (10/100)*this.totalSal;
                this.newSal = this.totalSal - this.tax;
                
              }

              else if(this.totalSal >= 50000 && this.totalSal < 100000)
              {
                this.tax = (5/100)*this.totalSal;
                this.newSal = this.totalSal - this.tax;
                

              }

              else if(this.totalSal < 49999)
              {
                this.newSal = 'No Any Tax' ; 
              }


        }

        else if(this.gender == 'female' || this.gender == 'Female' || this.gender == 'FEMALE')
        {
            

            if(this.totalSal >= 20000)
            {
              this.tax = (10/100)*this.totalSal;
              this.newSal = this.totalSal - this.tax;
              
            }

            else if(this.totalSal >= 100000 && this.totalSal < 200000)
            {
              this.tax = (5/100)*this.totalSal;
              this.newSal = this.totalSal - this.tax;
              
            }

            else if(this.totalSal < 99999)
            {
              this.new='No Any Tax';
            }

        }
         else
            {
            console.log("INVALID GENDER");
        }
        this.displayEmployeeData();
    } ,     

        displayEmployeeData ()
        {   
            document.querySelector('.displayEmpData').styyle.display = 'block'
            document.querySelector("#showName").innerText = this.name;
            document.querySelector("#showAge").innerText = this.age;
            document.querySelector("#showGen").innerText = this.gender;
            document.querySelector("#showDpt").innerText = this.department;
            document.querySelector("#showBSal").innerText =this.Basic_Salary;
            document.querySelector("#showTax").innerText = this.tax;
            document.querySelector("#showNetSal").innerText = this.newSal;           
        
        }       
};