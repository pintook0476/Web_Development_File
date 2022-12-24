
// write a program To calculate employee tax by using Function


var ename, age, Gender, bSalary, pf, hra, totalSalary, tax_10, tax_15, tax_5; // Global Variable
// Taking Input from User (Dynamically)
function inputEmpDetails() {
    ename = prompt("Enter The Employee Name");
    age = prompt("Enter The Employee Age");
    Gender = prompt("Enter The Employee Gender");
    bSalary = prompt("Enter The Employee Salary");
    bSalary = parseInt(bSalary);
    Calculating();
}


// Calculating The pf + hra + basic Salary
function Calculating() {
    pf = bSalary * (14 / 100);
    hra = bSalary * (25 / 100);
    totalSalary = pf + hra + bSalary;
    console.log(totalSalary);
    TaxSlab();

}

// Income Tax Slab For indian Citizen
function TaxSlab() {
    tax_15 = totalSalary * (15 / 100);
    tax_10 = totalSalary * (10 / 100);
    tax_5 = totalSalary * (5 / 100);

    // Income Tax Slab For Male
    if (Gender == "Male" || Gender == "male") {
        if (totalSalary >= 200000) {
            console.log('Mr.', ename, 'you have to pay ', tax_15, 'Rupees of your total salary.');
        }
        else if (totalSalary >= 100000) {
            console.log('Mr.', ename, 'you have to pay ', tax_10, 'Rupees of your total salary.');
        }
        else if (totalSalary >= 50000) {
            console.log('Mr.', ename, 'you have to pay ', tax_5, 'Rupees of your total salary.');
        }
        else {
            console.log(ename, "You Are not able to pay Tax -> Pls Increase you salary");
        }
    }
    // Income Tax Slab For Female
    else {
        if (totalSalary >= 200000) {
            console.log('Mrs.', ename, 'you have to pay ', tax_10, 'Rupees of your total salary.');
        }
        else if (totalSalary >= 100000) {
            console.log('Mrs.', ename, 'you have to pay ', tax_5, 'Rupees of your total salary.');
        }
        else if (totalSalary >= 50000) {

            console.log(ename, "You don't need to pay Tax");
        }
        else {
            console.log("You Are not able to pay Tax -> Pls Increase you salary");
        }
    }
}
inputEmpDetails();