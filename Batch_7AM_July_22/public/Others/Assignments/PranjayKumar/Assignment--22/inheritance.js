
    var schoolDetails = {
        SchoolName: 'DAV Public School',
        City:'Hyderabad',
        PinCode:'500032',
        SchoolRating:'4/5',
    }

    var readStudentData = () => {
        var sDetails = Object.create(schoolDetails);

        sDetails.displayStudentDetails = function(){

            console.log('PRINT ALL DETAILS OF STUDENT');
            console.log('Student Name:- '+this.name);
            console.log('Student Age:- '+this.age);
            console.log('Student Gender:- '+this.gender);
            console.log('Class Section:- '+this.section);

            console.log('School Name:- '+this.SchoolName);
            console.log('City:- '+this.City);
            console.log('Address PinCode:- '+this.PinCode);
            console.log('Rating in [5]:- '+this.SchoolRating);
        }

        sDetails.name = document.querySelector("#sName").value;
        sDetails.age = document.querySelector("#sAge").value;
        sDetails.gender = document.querySelector("input[name = gender]:checked").value;
        sDetails.section = document.querySelector("#sec").value;
    


        sDetails.displayStudentDetails ();
    }