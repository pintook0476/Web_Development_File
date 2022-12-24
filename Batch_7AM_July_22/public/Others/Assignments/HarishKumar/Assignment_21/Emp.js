



let empData = {

    getEmpDetailsa() {
        this.empName = document.querySelector('#eName').value;
        // console.log(this.empName);
        this.empEmail = document.querySelector('#eEmail').value;
        // console.log(this.empEmail);
        this.empGender = document.querySelector('input[name=gender]:checked').value;
        // console.log(this.empGender);
        this.empBirth = document.querySelector('#eBirth').value;
        // console.log(this.empBirth);
        this.empAdd1 = document.querySelector('#eAddress1').value;
        // console.log(this.empAdd1);
        this.empAdd2 = document.querySelector('#eAddress2').value;
        // console.log(this.empAdd2);
        this.empCity = document.querySelector('#eCity').value;
        // console.log(this.empCity);
        this.empState = document.querySelector('#eState').value;
        // console.log(this.empState);
        this.empZip = document.querySelector('#eZip').value;
        // console.log(this.empZip);
        empData.empDisplayData();
        document.querySelector('.container').style.display = 'none'
        document.querySelector('.output').style.display = 'block'

    },

    empDisplayData() {
        let myLi = document.querySelector('ul');

        let li_1 = document.createElement('li');
        li_1.setAttribute('class', 'list-group-item');
        li_1.innerText = "Employees Name = " + this.empName;
        myLi.append(li_1);

        let li_2 = document.createElement('li');
        li_2.setAttribute('class', 'list-group-item');
        li_2.innerText = "Employees Name = " + this.empEmail;
        myLi.append(li_2);

        let li_3 = document.createElement('li');
        li_3.setAttribute('class', 'list-group-item');
        li_3.innerText = "Employees Name = " + this.empGender;
        myLi.append(li_3);

    }

}

