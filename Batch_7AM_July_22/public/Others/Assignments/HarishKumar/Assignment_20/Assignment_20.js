
// Assignment - 20;

let getDetails = () => {
    let stdName = document.querySelector('#sName').value;
    let stdClass = document.querySelector('#class').value;
    let stdDOB = document.querySelector('#myDate').value;
    let m1 = parseInt(document.querySelector('#m1').value);
    let m2 = parseInt(document.querySelector('#m2').value);
    let m3 = parseInt(document.querySelector('#m3').value);
    let m4 = parseInt(document.querySelector('#m4').value);
    let m5 = parseInt(document.querySelector('#m5').value);
    let totalMarks = m1 + m2 + m3 + m4 + m5;
    let stdAvg = (totalMarks * 100) / 500;
    console.log(totalMarks);

    // student Report
    let myContainer = document.querySelector('.container');
    myContainer.style.display = 'block';

    let myWrapper = document.querySelector('.wrapper');
    myWrapper.style.display = 'none';

    let studentName = document.createElement('p');
    studentName.innerText = "Student Name - " + stdName;
    myContainer.append(studentName);

    // let studentGender = document.createElement('p');
    // studentGender.innerText = "Gender - " + male;
    // myContainer.append(studentGender);

    let studentBirth = document.createElement('p');
    studentBirth.innerText = "Date Of Birth - " + stdDOB;
    myContainer.append(studentBirth);

    let studentClass = document.createElement('p');
    studentClass.innerText = "Class - " + stdClass;
    myContainer.append(studentClass);

    let studentAvg = document.createElement('p');
    studentAvg.innerText = "Percentage - " + stdAvg + "%";
    myContainer.append(studentAvg);

}