var edata = () => {
    var name = document.querySelector("#ename").value;
    var age = document.querySelector("#eage").value;
    var Gender = document.querySelector("input[name = Gender]:checked").value;
    
    var department = document.querySelector("#department").value;
    var employeid = document.querySelector("#eid").value;
    var basicsalary = document.querySelector("#salary").value;
    basicsalary = parseInt(basicsalary);
    
    
    document.querySelector(".block1").classList.add('hide');
    document.querySelector(".block2").classList.remove('hide');
    var pf = basicsalary * (14 / 100);
        var pf = parseInt(pf);
        var hrf = basicsalary * (25 / 100);
        var hrf = parseInt(hrf);

        var totalsalary = basicsalary + pf + hrf;
        var tax ; 
            if(Gender == "Male"){
                if(totalsalary >= 250000){
                    tax = totalsalary * (15/100);
                }else if(totalsalary >= 150000){
                    tax = totalsalary * (10/100);
                }else if(totalsalary >= 50000){
                    tax = totalsalary * (5/100);
                }
                
            }else{
                    if(Gender == "Female"){
                        if(totalsalary >= 250000){
                            tax = totalsalary * (10/100);
                        }else if(totalsalary >= 150000){
                            tax = totalsalary * (5/100);
                        }else if(totalsalary >= 50000){
                            tax = 0;
                        }
                        
                    }
                }
            
        

        document.querySelector("#enameout").innerText = name;
        document.querySelector("#egeout").innerText = age;
        document.querySelector("#genderout").innerText = Gender;
        document.querySelector("#departmentout").innerText = department;
        document.querySelector("#eidout").innerText = employeid ; 
        document.querySelector("#salaryout").innerHTML = basicsalary;
        document.querySelector("#total").innerText = totalsalary;
        document.querySelector("#tax").innerText = tax ;
    }  
    