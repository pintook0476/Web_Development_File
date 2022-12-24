var EmployeeDetails={
getData(){
this.eName=document.querySelector(".name").value;
this.eName=(this.eName).toUpperCase();
this.eAge=document.querySelector(".age").value;
this.eGender=document.querySelector("input[name=gender]:checked").value;
this.eGender=(this.eGender).toUpperCase();
this.eDepartment=document.querySelector(".department").value;
this.eBsalary=document.querySelector(".bsalary").value;
document.querySelector(".displayDetails").style.display="block";
this.setData();
},
setData(){
    
   
   // console.log(this.getTax());
    document.querySelector(".dname").innerText=this.eName;
    document.querySelector(".dgender").innerHTML=this.eGender;
    document.querySelector(".dbsalary").innerText=this.eBsalary;
    this.eBsalary=parseInt(this.eBsalary);
    this.totalsalary=this.eBsalary*30/100+this.eBsalary;
    document.querySelector(".totalSalary").innerHTML=this.totalsalary;
    document.querySelector(".dDepartment").innerText=this.eDepartment;
    this.getTax1();
    document.querySelector(".tax").innerHTML=this.Ptax;
    console.log(this.Ptax);
},
// getTax(){
//     console.log(this.eGender);
    
//     if(this.eGender=="MALE"){
//         if(this.totalsalary>200000){
//             return 15;
//         }
//         else if(this.totalsalary>100000){
//             return 10;
//         }
//         else if(this.totalsalary>50000){
//             return 5;
//         }
//     }
//     else{
//             if(this.totalsalary>20000){
//                 return 10;
//             }
//             else if(this.totalsalary>100000){
//                 return 5;
//             }
//     }
// },
getTax1(){
    console.log(this.eGender);
    
    if(this.eGender=="MALE"){
        if(this.totalsalary>200000){
            this.Ptax=this.totalsalary *15/100;
        }
        else if(this.totalsalary>100000){
            this.Ptax= this.totalsalary *10/100;
        }
        else if(this.totalsalary>50000){
            this.Ptax= this.totalsalary *5/100;
        }
    }
    else{
            if(this.totalsalary>20000){
                this.Ptax= this.totalsalary *10/100;
            }
            else if(this.totalsalary>100000){
                this.Ptax= this.totalsalary *5/100;
            }
    }

},
reload(){
    location.reload();
},
print()
{
    document.querySelector(".main").style.display="none";
    window.print();
}
}

