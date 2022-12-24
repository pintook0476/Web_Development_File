var studentDetails = {
    generateProgressCard() {    
        this.sName = document.querySelector("#uname").value;
        this.sage = document.querySelector("#uage").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.languages = [];
    
        var inputLngList = document.querySelectorAll(".language input:checked");
        // Reading checked languages
        for (var i = 0 ; i < inputLngList.length; i++) {
            this.languages.push(inputLngList[i].value)
        }
        this.marks = [];
    
        // Reading marks 
        for (var i = 1; i <= 5; i++) {
            var id = '#m' + i; 
            this.marks.push(parseInt(document.querySelector(id).value));
        }
    
        this.className = document.querySelector("#studentClass").value;
        this.getTotalAndAvg();
    },
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    
        this.getGrade();
    },
    getGrade() {
        if (this.avg >= 40) {
            this.grade = "You are passed";
        } else {
            this.grade = 'You have a Surprise';
        }
    
        this.displayStudentProgressCard();
    },
    displayStudentProgressCard() {
        console.log(studentDetails)
        document.querySelector(".displayBlock").style.display = 'block';
        document.querySelector("#readBlock").style.display = 'none';
        document.querySelector("#d_name").innerText = this.sName; 
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_age").innerText = this.sage;
        document.querySelector("#d_class").innerText = this.className;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_avg").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;
    }
};


