
// Assignment - 23
// college details - parent;
// student details - child


let clgDetails = {
    clgAdd: "Bilaspur University",
    princeName: "Dr. Singh",
    stb: 1957,
}


let stdDetails_1 = {
    name: "Harish Kumar",
    stdAge: 21,
    education: "Graduate",
    stdAdd: "Chhattisagrh",
    course: "Full Stack Web Developer"
}

let stdDetails_2 = {
    name: "Dinesh Padhan",
    stdAge: 18,
    education: "12th",
    stdAdd: "Odisa",
    course: "Full Stack Web Developer"
}


// College Base Class 
class College {
    constructor(stdDetail_1) {
        this.collegeName = 'D.J.P Mishra science college';
        this.location = clgDetails.clgAdd;
        this.principal = clgDetails.princeName;
        this.colStb = clgDetails.stb;
        this.officeAdd = "Hi-tech City Hyderabad - 500073"

        // student Details
        this.stdName = stdDetail_1.name;
        this.stdAge = stdDetail_1.stdAge;
        this.education = stdDetail_1.education;
        this.stdAdd = stdDetail_1.stdAdd;

    }
    showCollegeDetails() {

        let box = document.querySelector('#clgDetails');

        let p1 = document.createElement('p')
        p1.innerHTML = "<b> College Name - </b>" + this.collegeName;
        box.append(p1);

        let p2 = document.createElement('p')
        p2.innerHTML = "<b> Address - </b> " + this.location;
        box.append(p2);

        let p3 = document.createElement('p')
        p3.innerHTML = "<b>College Principal - </b> " + this.principal;
        box.append(p3);


        let p4 = document.createElement('p')
        p4.innerHTML = "<b> Established in - </b> " + this.colStb;
        box.append(p4);

        let p5 = document.createElement('p')
        p5.innerHTML = "<b> Head Office - </b> " + this.officeAdd;
        box.append(p5);

    }
}

let clgObj = new College(clgDetails);
clgObj.showCollegeDetails();



// Here College Class is Extended/ Derived by Student Class
class Student extends College {

    showCollegeDetails() {
        let box = document.querySelector('#stdDetails');

        let p1 = document.createElement('p')
        p1.innerHTML = "<b> Student Name - </b>" + this.stdName;
        box.append(p1);

        let p2 = document.createElement('p')
        p2.innerHTML = "<b> Date Of Birth - </b> " + this.stdAge;
        box.append(p2);

        let p3 = document.createElement('p')
        p3.innerHTML = "<b> Education - </b> " + this.education;
        box.append(p3);

        let p5 = document.createElement('p')
        p5.innerHTML = "<b> Address - </b> " + this.stdAdd;
        box.append(p5);

        let p4 = document.createElement('p')
        p4.innerHTML = "<b> College Name - </b> " + this.collegeName;
        box.append(p4);
    }
}

let std_1 = new Student(stdDetails_2);
std_1.showCollegeDetails();

