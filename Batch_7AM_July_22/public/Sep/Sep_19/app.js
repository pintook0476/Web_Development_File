
var studentDetailsList = [];

class CollegeDetails {
    constructor(obj) {
        this.collegeName = obj.name;
        this.collegeCode = obj.code;
    }
    displayCollegeDetails() {
        console.log("College name " + this.collegeName);
        console.log("College Code " + this.collegeCode);
    }
}

class StudentDetails extends CollegeDetails{
    constructor(cdata, sdata) {
        var studentAddress = 'Hyderabad';
        super(cdata);
        this.sName = sdata.sName;
        this.age = sdata.age;
        this.gender = sdata.gender;
        this.selectedSport = sdata.sportName;
    }
    displayStudentDetails() {
        console.log("Student name " + this.sName);
        console.log("AGe " + this.age);
        console.log("Gender " + this.gender);
        console.log("Sport opted " + this.selectedSport);
        this.displayCollegeDetails();
    }
}


var obj1 = {};
var registerCollege = () => {
    
    obj1.name = document.querySelector("#cName").value;
    obj1.code = document.querySelector("#cCode").value;

}

var registerStudent = () => {

    var obj2 = {};
    obj2.sName = document.querySelector("#sName").value;
    obj2.age = document.querySelector("#sAge").value;
    obj2.gender = document.querySelector("#sGender").value;
    obj2.sportName = document.querySelector("#sSport").value;
    
    var s1 = new StudentDetails(obj1, obj2);
    s1.displayStudentDetails();

    studentDetailsList.push(s1);
    console.log(studentDetailsList);
    
    document.querySelector(".successflyRegistered").style.display = 'block';
}