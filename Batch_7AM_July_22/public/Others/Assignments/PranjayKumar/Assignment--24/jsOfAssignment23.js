var studentDetailsList = [];

class CollegeDetails {
    constructor(obj){
        this.collegeName = obj.name;
        this.collegeCode = obj.code;
        this.collegeType = obj.type;
        this.collegeAddress = obj.address;
    }
    displayDataOfCollege(){
        console.log("College Name:- "+this.collegeName);
        console.log("College Code:- "+this.collegeCode);
        console.log("College Type:- "+this.collegeType);
        console.log("College Address:- "+this.collegeAddress);

    }
}
class StudentDetails extends CollegeDetails {
    constructor(cdata,sdata){
    super(cdata);

    this.sName = sdata.sName;
    this.Age = sdata.Age;
    this.Gender = sdata.Gender;
    this.selctedStreem = sdata.streemName;
    this.selectedSports = sdata.sportName;
    this.medical = sdata.medical; 
    }

    displayDataOfStudent (){
        console.log("Student Name:- "+this.sName);
        console.log("Age:- "+this.Age);
        console.log("Gender:- "+this.Gender);
        console.log("Strem Optd:- "+this.selectedSports);
        console.log("Sports Optd:- "+this.selctedStreem);
        console.log("Medical Fit:- "+this.medical);
        this.displayDataOfCollege();
    }

}

var obj1 = {};

var registerCollege = () => {
    obj1.name = document.querySelector("#cName").value;
    obj1.code = document.querySelector("#cCode").value;
    obj1.type = document.querySelector("#cType").value;
    obj1.address = document.querySelector("#cAddress").value;

}

        

var registerStudent = () => {

    var obj2 = {};
    obj2.sName = document.querySelector("#sName").value;
    obj2.Age = document.querySelector("#sAge").value;
    obj2.Gender = document.querySelector("#mGen").value;
    obj2.streemName = document.querySelector("#streem").value;
    obj2.sportName = document.querySelector("#game").value;
    obj2.medical = document.querySelector("#report").value;


var s1 = new StudentDetails(obj1, obj2);
s1.displayDataOfStudent ();

studentDetailsList.push(s1);
console.log(studentDetailsList);

}
