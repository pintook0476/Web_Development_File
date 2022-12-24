   var studentDetails = {
        
          //from ECMA6 we can define function like this          
          readStuData() {
                    this.name = document.querySelector("#sname").value ;
                    if (!this.name){
                        document.querySelector(".nameMandate").style.display = "block";
                        return;
                    }else{
                        document.querySelector(".nameMandate").style.display = "none";
                    }
                    this.age = document.querySelector("#age").value ;
                    if (!this.age){
                        document.querySelector(".ageMandate").style.display = "block";
                        return;
                    }else{
                        document.querySelector(".ageMandate").style.display = "none";
                    }
                    this.gender = document.querySelector("input[name=gender]:checked").value; 
                    //:checked is selected position, name is attribute
                    this.class = document.querySelector("#sclass").value;
                    studentDetails.marks = [];
                    var id;
                    for (var i = 1; i <= 5; i++) {
                        id = "#m" + i;
                        var subjectMarks = parseInt(document.querySelector(id).value);
                        studentDetails.marks.push(subjectMarks);
                    }
                    this.getTotalAndAvg();
                },
        getTotalAndAvg() {
    
                        this.total = 0;
                        for (var i = 0; i < this.marks.length; i++) {
                            this.total += studentDetails.marks[i];
                        } 
                        this.avg = this.total / this.marks.length;
                        this.getGrade();
                    },
        getGrade() {
                        if (this.avg >= 45)
                            { if (studentDetails.marks[0] >44 && studentDetails.marks[1]>44 && studentDetails.marks[2]>44 && studentDetails.marks[3]>44 && studentDetails.marks[4]>44) 
                            {
                                this.grade = "Pass";
                            }
                            else {
                                this.grade = "Fail";
                            }
                        
                        } else 
                        {
                            this.grade = "Fail";
                        }
                    },
        displayStudentProgressCard() {
                        this.readStuData();
                        document.querySelector("#dName").innerHTML = this.name;
                        document.querySelector("#dAge").innerHTML = this.age;
                        document.querySelector("#dGender").innerHTML = this.gender;
                        document.querySelector("#dClass").innerHTML = this.class;
                        for (var i = 0; i < this.marks.length; i++) {
                        if (!this.marks[i]){
                            document.querySelector(".mMandate").style.display = "block";
                            return;
                        }
                       } 
                        document.querySelector("#dm1").innerHTML = this.marks[0];
                        document.querySelector("#dm2").innerHTML = this.marks[1];
                        document.querySelector("#dm3").innerHTML = this.marks[2];
                        document.querySelector("#dm4").innerHTML = this.marks[3];
                        document.querySelector("#dm5").innerHTML = this.marks[4];
                        document.querySelector("#dRes").innerHTML = this.grade;
                 if (this.grade == "Pass") 
                        {
                        document.querySelector("#dTotal").innerHTML = this.total;
                        document.querySelector("#dPer").innerHTML = this.avg + "%";
                       }
                 else {
                        document.querySelector("#dTotal").innerHTML = "  -";
                        document.querySelector("#dPer").innerHTML = "  -";
                      }      
                        document.querySelector(".mainContainer").style.display = "none";
                        document.querySelector(".displayBlock").style.display = "block";
                    }
    };

    var generateProgressCard = () => {
           studentDetails.displayStudentProgressCard();
    } 