var studentDetails = {
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total/this.marks.length;
    },
    getGrade() {
        if (this.avg >= 60) {
            this.grade = 'You are passed';
        } else {
            this.grade = ' You have a surprise';
        }
    },
    readStudentDetails(){    
        this.name = document.querySelector("#sname").value;
        if (!this.name) {
            document.querySelector(".nameMandateErr").style.display = 'block';
            return;
        }
        this.age = document.querySelector("#sAge").value;
        this.gender =  document.querySelector("input[name=gender]:checked").value;
        this.class = document.querySelector("#sClass").value;
        this.marks = [];
        for (var i = 0; i < 5; i++) {
            var value = document.querySelector("#m" + (i+1)).value;
            this.marks.push(parseInt(value));
        }
        this.getTotalAndAvg();
        this.getGrade();
        this.dispalyDetails();
    },
    dispalyDetails() {
        document.querySelector(".progressCardBlock").style.display = 'block';
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dclass").innerText = this.class;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;
        
    }
};

