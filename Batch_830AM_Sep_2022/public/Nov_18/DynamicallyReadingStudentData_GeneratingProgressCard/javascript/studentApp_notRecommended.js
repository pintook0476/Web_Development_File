var studentDetails = {};

var generateProgressCard = () => {
    
    studentDetails.sName = document.querySelector("#uname").value;
    studentDetails.sage = document.querySelector("#uage").value;
    studentDetails.gender = document.querySelector("input[name=gender]:checked").value;
    studentDetails.languages = [];

    var inputLngList = document.querySelectorAll(".language input:checked");
    // Reading checked languages
    for (var i = 0 ; i < inputLngList.length; i++) {
        studentDetails.languages.push(inputLngList[i].value)
    }
    studentDetails.marks = [];

    // Reading marks 
    for (var i = 1; i <= 5; i++) {
        var id = '#m' + i; 
        studentDetails.marks.push(parseInt(document.querySelector(id).value));
    }

    studentDetails.className = document.querySelector("#studentClass").value;
    getTotalAndAvg();
}

var getTotalAndAvg = () => {
    studentDetails.total = 0;
    for (var i = 0 ; i < studentDetails.marks.length; i++) {
        studentDetails.total += studentDetails.marks[i];
    }
    studentDetails.avg = studentDetails.total / studentDetails.marks.length;

    getGrade();
}


var getGrade = () => {
    if (studentDetails.avg >= 40) {
        studentDetails.grade = "You are passed";
    } else {
        studentDetails.grade = 'You have a Surprise';
    }

    displayStudentProgressCard();
}

var displayStudentProgressCard = () => {
    document.querySelector(".displayBlock").style.display = 'block';
    document.querySelector("#readBlock").style.display = 'none';
    document.querySelector("#d_name").innerText = studentDetails.sName; 
    document.querySelector("#d_gender").innerText = studentDetails.gender;
    document.querySelector("#d_age").innerText = studentDetails.sage;
    document.querySelector("#d_class").innerText = studentDetails.className;
    document.querySelector("#d_total").innerText = studentDetails.total;
    document.querySelector("#d_avg").innerText = studentDetails.avg;
    document.querySelector("#d_grade").innerText = studentDetails.grade;

}