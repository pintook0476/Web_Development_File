class CollegeDetails{
    constructor(obj){
        this.collegename = obj.name;
        this.collegeAddress = obj.address;
        this.collegecode = obj.code;
    }
    displaycollegedetails(){
        document.querySelector("#showcname").innerText = "College Name : " + this.collegename;
        document.querySelector("#showcAddress").innerText = "College Address : "+ this.collegeAddress;
        document.querySelector("#showCcode").innerText = "College Code :" + this.collegecode;
     }
}
var obj1 = {};
 var usercollegeData = () => {
    
    obj1.name = document.querySelector("#outputcollegename").value;
    obj1.address = document.querySelector("#outputcollegeaddress").value;
    obj1.code = document.querySelector("#outputcollegecode").value;
    
    document.querySelector(".maincontainer").classList.add("hide")
    document.querySelector(".sContainer").classList.add("show");
    document.querySelector(".showcontainer").classList.add("hide");
    
    
 }
 class StudentDetails extends CollegeDetails{
    constructor(obj1,data){
        super(obj1);
        this.studentname = data.name;
        this.studentage = data.age;
        this.studentAddress = data.address;
        this.studentGender = data.gender;
        this.studentenrollmentno = data.enrollmentno;
        this.studentbranch = data.branch;
    }
    displaystudentdetails(){
        document.querySelector("#showSname").innerText = "Student Name : " + this.studentname;
        document.querySelector("#showSage").innerText = "Student Age : " + this.studentage;
        document.querySelector("#showSgender").innerText = "Student Gender : " + this.studentGender;
        document.querySelector("#showSaddress").innerText = "Student Address : " + this.studentAddress;
        document.querySelector("#showSenumber").innerText = "Student Enrollment No. : " + this.studentenrollmentno;
        document.querySelector("#showSbranch").innerText = "Student Branch : " + this.studentbranch;
    }
 }

var userStudentdata = () => {
        var obj2 = {};
        obj2.name  = document.querySelector("#outputstudentname").value;
        obj2.age = document.querySelector("#outputstudentage").value;
        obj2.gender = document.querySelector("input[name = gender]:checked").value;
        obj2.address = document.querySelector("#outputstudentaddress").value;
        obj2.enrollmentno = document.querySelector("#outputstudentenrollment").value;
        obj2.branch = document.querySelector("#selectioninput").value;
        document.querySelector(".sContainer").style.display = "none";
        document.querySelector(".showcontainer").classList.add("show");
    var m = new StudentDetails(obj1,obj2);
    m.displaystudentdetails();
    m.displaycollegedetails();       

}