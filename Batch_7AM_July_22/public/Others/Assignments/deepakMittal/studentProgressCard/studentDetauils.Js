class generateStudentProgressCard  {
    constructor(data){
       this.name = data.name;
       this.age = data.age;
       this.location = data.location;
       this.mobile = data.mobile;
       this.gender = data.gender;
       this.class = data.class;
       this.marks = data.marks;
        this.displayStudentDetails();

    }
    

    calAvgAndTotalMarks (){
        this.totalMarks = 0;
        for(var i =0; i < this.marks.length; i++){
            this.totalMarks += this.marks[i];

        };

        this.avgMarks = this.totalMarks / this.marks.length;
        
    }

    calGradeOfStudents (){
        if(this.totalMarks <= 60){
            this.grade = "You Are Passed";

        }else{
            this.grade = "You Got A Surprise";
        };
    }

    displayStudentDetails (){
        this.calAvgAndTotalMarks();
        this.calGradeOfStudents();
        document.querySelector("#studentName").innerHTML = this.name;
        document.querySelector("#studentAge").innerHTML = this.age;
        document.querySelector("#studentLocation").innerHTML = this.location;
        document.querySelector("#studentMobile").innerHTML = this.mobile;
        document.querySelector("#studentGender").innerHTML = this.gender;
        document.querySelector("#studentClass").innerText = this.class;
        document.querySelector("#studentMarkss").innerText = this.totalMarks;
        document.querySelector("#studentAvg").innerText = this.avgMarks;
        document.querySelector("#studentGrade").innerHTML = this.grade;
    }
};

studentProgressCard = () =>{
    var sDetail = {};
    sDetail.name = document.querySelector("#sName").value;
    sDetail.age = document.querySelector("#sAge").value;
    sDetail.location = document.querySelector("#sLocation").value;
    sDetail.mobile = document.querySelector("#sMobile").value;
    sDetail.gender = document.querySelector("input[name=gender]:checked").value;
    sDetail.class = document.querySelector("#sClass").value;
    sDetail.marks = [];
    for(var i = 0; i < 5; i++){
       var value = document.querySelector("#m" + (i+1)).value;
       value = parseInt(value);
       sDetail.marks.push(value);
    };
    var s1 = new generateStudentProgressCard(sDetail);


    document.querySelector(".displayDetailsHere").style.display = "block";
    document.querySelector(".getStudentDetails").style.display = "none";

    console.log(s1);
   
}
