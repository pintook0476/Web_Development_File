var studentDetails = {
    getTotalandAvg: function (){
        this.total = 0;
        for (i = 0; i < this.marks.length; i++){
            this.total = this.total + this.marks[i];
        }
        this.avg = this.total / this.marks.length
    },
    getGrade: function () {
        if (this.avg >= 60){
            this.grade = "You are Passed"
        } else {
            this.grade = "You have a Surprised"
        }
    },
    readStudentDetails: function () {

        this.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#sage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.class = document.querySelector("#class").value;
    
        this.marks = [];
        // studentDetails.marks[0] = document.querySelector("#m1").value;
        // studentDetails.marks[1] = document.querySelector("#m2").value;
        // studentDetails.marks[2] = document.querySelector("#m3").value;
    
        for (i = 0; i < 4; i++){
            var value = document.querySelector("#m" + (i+1)).value;
            this.marks.push(parseInt(value));
        }
        this.getTotalandAvg();
        this.getGrade();
        this.displayDetails();
    },
    displayDetails: function () {
        document.querySelector(".ProgressCardBlock").style.display = "block";
        document.querySelector("#dname").innerHTML = this.name;
        document.querySelector("#dage").innerHTML = this.age;
        document.querySelector("#dgender").innerHTML = this.gender;
        document.querySelector("#dclass").innerHTML = this.class;
        document.querySelector("#dtotal").innerHTML = this.total;
        document.querySelector("#davg").innerHTML = this.avg;
        document.querySelector("#dgrade").innerHTML = this.grade;
    }
};


