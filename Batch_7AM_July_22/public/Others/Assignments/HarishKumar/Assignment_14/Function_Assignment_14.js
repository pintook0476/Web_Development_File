
// write a program To calculate employee tax by using Function


// Global Variable
// Taking Input from User (Dynamically)
function inputEmpDetails() {
    var ename, age, Gender, bSalary, pf, hra, totalSalary, result;
    ename = prompt("Enter The Employee Name");
    age = prompt("Enter The Employee Age");
    Gender = prompt("Enter The Employee Gender");
    bSalary = prompt("Enter The Employee Salary");
    bSalary = parseInt(bSalary);
    totalSalary = Calculating(bSalary);
    showDetails(ename, age, Gender, totalSalary);
}


// Calculating The pf + hra + basic Salary
function Calculating(bSalary) {
    pf = bSalary * (5 / 100);
    hra = bSalary * (15 / 100);
    totalSalary = pf + hra + bSalary;
    return totalSalary;
}

function showDetails(ename, age, Gender, totalSalary) {
    console.log(ename);
    console.log(age);
    console.log(Gender);
    console.log(totalSalary);
}
inputEmpDetails();