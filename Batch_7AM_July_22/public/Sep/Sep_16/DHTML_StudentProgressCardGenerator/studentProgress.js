
class StudentDetails {
    constructor(sdetils) {
        this.name = sdetils.name;
        this.age = sdetils.age;
        this.gender = sdetils.gender;
        this.marks = sdetils.marks;
        this.class = sdetils.class;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total/this.marks.length;
    }
    getGrade() {
        if (this.avg >= 60) {
            this.grade = 'You are passed';
        } else {
            this.grade = ' You have a surprise';
        }
    }

    dispalyDetails() {
        this.getTotalAndAvg();
        this.getGrade();
        document.querySelector(".progressCardBlock").style.display = 'block';
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dclass").innerText = this.class;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;
    }
}


var generateProgressCard = () => {
    var data = {};
    data.name = document.querySelector("#sname").value;
    data.age = document.querySelector("#sAge").value;
    data.gender =  document.querySelector("input[name=gender]:checked").value;
    data.class = document.querySelector("#sClass").value;
    data.marks = [];
    for (var i = 0; i < 5; i++) {
        var value = document.querySelector("#m" + (i+1)).value;
        data.marks.push(parseInt(value));
    }
    var s1 = new StudentDetails(data);
    console.log(s1);
}

