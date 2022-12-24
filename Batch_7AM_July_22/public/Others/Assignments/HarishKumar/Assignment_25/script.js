// this is the array which is store all the input data of Student and College
let storeData = [];

// Parent Class/ Base Class
class College {
    constructor(obj) {
        this.clgName = obj.clgName
        this.clgCode = obj.clgCode
        this.clgAdd = obj.clgAdd
    }
    // desClgDetail() {
    //     console.log("college Name = " + this.clgName);
    //     console.log("college Code = " + this.clgCode);
    //     console.log("college Address = " + this.clgAdd);
    // }
}

// Child / Derived Class
class Student extends College {
    constructor(obj, sData) {
        super(obj);
        this.stdName = sData.stdName;
        this.stdAge = sData.stdAge;
        this.gender = sData.gender;
        this.course = sData.course;
        this.stdAdd = sData.stdAdd;
    }
    // desStdDetails() {
    //     console.log("Student Name = " + this.stdName);
    //     console.log("Student Age = " + this.stdAge);
    //     console.log("Student Gender = " + this.gender);
    //     console.log("Student Course = " + this.course);
    //     console.log("Student Address = " + this.stdAdd);
    // }
}


let clgDetails = {}
// getting the input value form College Details
let getClgDetails = () => {
    clgDetails.clgName = document.getElementById('clgName').value
    clgDetails.clgCode = document.getElementById('clgCode').value
    clgDetails.clgAdd = document.getElementById('clgAdd').value
    let = clgMsg = document.getElementById('clgMsg')
    clgMsg.style.display = 'block';
    // let clg = new College(clgDetails);
    // clg.desClgDetail();
}


// getting the input value form Student Details
let getStdDetails = () => {
    let stdDetails = {}
    stdDetails.stdName = document.getElementById('stdName').value
    stdDetails.stdAge = document.getElementById('stdAge').value
    stdDetails.gender = document.querySelector('input[name="gender"]:checked').value
    stdDetails.course = document.getElementById('course').value
    stdDetails.stdAdd = document.getElementById('stdAdd').value
    let = stdMsg = document.getElementById('stdMsg')
    stdMsg.style.display = 'block'

    // this is Student Class Object with two parameter
    let std = new Student(clgDetails, stdDetails);
    // std.desStdDetails();
    // std.desClgDetail();
    storeData.push(std);
    console.log(storeData);
}
