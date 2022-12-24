var employeedetails={
    salary (){
    this.name = document.querySelector("#name").value ;
    this.age = document. querySelector("#age").value ;
   this. gender = document. querySelector("#gender").value ;
   this. loc = document. querySelector("#comp").value ;
   this. basicpay = document. querySelector("#basicsalary").value ;
 this.basicpay = parseInt(this.basicpay);
this.calculate();
 
},
calculate(){

this.hra = this.basicpay*10/100;
this.pf = this.basicpay *10/100;
this.total= this.basicpay + this.pf + this.hra;
this .readdetails();
},
  readdetails(){
    document.querySelector(".box2")
    document.querySelector("#ename").innerHTML=  employeedetails.name;
    document.querySelector("#eage").innerHTML= employeedetails.age;
    document.querySelector("#egender").innerHTML= employeedetails.gender;
    document.querySelector("#ecom").innerHTML= employeedetails.loc;
    document.querySelector("#ebasicpay").innerHTML= employeedetails.basicpay;
   document.getElementById("ehra"). innerHTML = this.hra
   document.getElementById("epf").innerHTML= this.pf
   document.getElementById("etotalpay").innerHTML= this.total;
   document.querySelector(".box1").style.display = 'block';
   document.querySelector(".box").style.display = 'none';
},


 
}