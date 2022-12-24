var employeeDetails ={} ;
employeeDetails.getEmployeeDetails = function(){
    this.ename=document.querySelector("#ename").Value;
    this.eage=document.querySelector("#eage").value;
    this.egender=document.querySelector('input[name=gender]:checked').value;
    this.edept=document.querySelector("#edept").value;
    this.basicsal=document.querySelector("#bascisal").value;
    this.basicsal=parseInt(employeeDetails.basicsal);
    this.getTotalsal();
}
employeeDetails.getTotalsal =function() {
    this.hra =15/100 *basicsal;
    this.pf =25/100 * basicsal;
    this.totalsal=this.hra+this.pf+this.basicsal;
    employeeDetails.getTax=()=>{
        if(this.egender=="Male"){
            if(this.totalsal>400000){
                this.etax=15/100 * this.totalsal;
            } else if(this.totalsal>200000){
                this.etax=10/100 * this.totalsal;
            } else if(this.totalsal>100000){
                this.etax=5/100 *this.totalsal;
            } else{
                this.etax = 0 * this.totalsal;
            }
        }
        if(this.egender=="Female"){
            if(this.totalsal>400000){
                this.etax== 10 / 100 * this.totalsal;

            } else if(this.totalsal>200000){
                this.etax= 5 /100 * this.totalsal;

            } else if(this.totalsal > 100000){
                this.etax= 2/100 * this.totalsal;
            } else {
                this.etax =0 * this.totalsal;
            }
        }
    } 
    this.getTax ();
    employeeDetails.tsal =this.totalsal -this.etax;
    employeeDetails.displaytotalsal();
}
employeeDetails.displaytotalsal= function(){
    document.querySelector(".Payslip").style.display ='block';
    document.querySelector("#rname").innerHTML =this.ename;
    document.querySelector("#rage").innerHTML =this.eage;
    document.querySelector("#rgender").innerHTML =this.egender;
    document.querySelector("#rdept").innerHTML =this.edept;
    document.querySelector("#rbsal").innerHTML =this.ebsal;
    document.querySelector("#rhra").innerHTML =this.ehra;
    document.querySelector("#rpf").innerHTML =this.epf;
    document.querySelector("#rtotalsal").innerHTML =this.etotalsal;
    document.querySelector("#etax").innerHTML =this.etax;
    document.querySelector("#tsal").innerHTML =this.tsal;
}
function generatePayslip(){
    employeeDetails.getEmployeeDetails();
}