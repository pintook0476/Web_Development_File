var eDetails = {
    getEmployeeDetails() {
   
        eDetails.name = document.querySelector('#eName').value,
        eDetails.age = document.querySelector('#eAge').value,
        eDetails.gender = document.querySelector('input[name=gender]:checked').value;
        eDetails.loc = document.querySelector('#eLocation').value;
        eDetails.dep = document.querySelector('#eDep').value;
        eDetails.basicSal = document.querySelector('#eBasicSal').value;
        eDetails.basicSal = parseInt(eDetails.basicSal);
        eDetails.pf = 0.15 * eDetails.basicSal;
        eDetails.hra = 0.25 * eDetails.basicSal;
        eDetails.totalSal = eDetails.basicSal+ eDetails.pf + eDetails.hra;
        eDetails.taxpaid = 0;
        eDetails.inHandSalary = 0;
        this.getTaxPaid()
    },
    getTaxPaid() {
        if (eDetails.gender == "male" && eDetails.totalSal >= 200000) {
            eDetails.taxpaid = 0.15 * eDetails.totalSal;
            eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
        } else if (eDetails.gender == "male" && eDetails.totalSal >= 100000) {
            eDetails.taxpaid = 0.10 * eDetails.totalSal;
            eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
        } else if (eDetails.gender == "male" && eDetails.totalSal >= 50000) {
            eDetails.taxpaid = 0.50 * eDetails.totalSal;
            eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
        }    else if (eDetails.gender == "male" && eDetails.totalSal < 50000) {
            eDetails.taxpaid = 0;
            eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
        }  
        else {
            if (eDetails.gender == 'female' && eDetails.totalSal >= 200000) {
                eDetails.taxpaid = 0.10 * eDetails.totalSal;
                eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
            } else if (eDetails.gender == 'female' && eDetails.totalSal >= 100000) {
                eDetails.taxpaid = 0.50 * eDetails.totalSal;
                eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
            } else if (eDetails.gender == 'female' && eDetails.totalSal >= 50000) {
                eDetails.taxpaid = 0;
                eDetails.inHandSalary = eDetails.totalSal - eDetails.taxpaid
            }
        } 
        this.displayEmployeeData()
    },
    displayEmployeeData() {
        document.querySelector('#displayName').innerHTML = (eDetails.name);
        document.querySelector('#displayAge').innerHTML = (eDetails.age);
        document.querySelector('#displayGender').innerHTML = (eDetails.gender);
        document.querySelector('#displayLoc').innerHTML = (eDetails.loc);
        document.querySelector('#displayDep').innerHTML = (eDetails.dep);
        document.querySelector('#displayTotalSalary').innerHTML = (eDetails.totalSal);
        document.querySelector('#displayTax').innerHTML = (eDetails.taxpaid);
        document.querySelector('#displayInHandSalary').innerHTML = (eDetails.inHandSalary);
        document.querySelector('.showingData').style.display = 'block';
        document.querySelector('.eDetails').style.display = 'none';
    }
};


    

   

   
   

