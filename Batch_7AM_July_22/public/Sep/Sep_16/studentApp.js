var schoolDetails = {
    schoolName: 'ABC School',
    schoolLoc: 'Hyderabad',
    schoolRating: '4/5'
}

var readStudentData = () => {
    var sDetails = Object.create(schoolDetails);

    sDetails.displayStudentDetails = function() {
            console.log("Student dteails");
            console.log("STudent name " + this.name);
            console.log("Age " + this.age);
            console.log("Gender " + this.gender);
            console.log("Class Joined " + this.class);

            console.log("School Name" + this.schoolName)
            console.log("School Location" + this.schoolLoc)
            console.log("School Rating" + this.schoolRating)
        }

    sDetails.name = document.querySelector("#sname").value;
    sDetails.age = document.querySelector("#sage").value;
    sDetails.gender = document.querySelector("input[name=gender]:checked").value;
    sDetails.class = document.querySelector("#admissionClass").value;

    sDetails.displayStudentDetails();
}