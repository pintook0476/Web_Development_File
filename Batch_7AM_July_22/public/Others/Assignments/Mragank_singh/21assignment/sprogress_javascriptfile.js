var object = {
readStudentdetails: function(){
    object.name = document.querySelector("#sname").value;
    object.age = document.querySelector("#sage").value;
    object.gender = document.querySelector("input[name=gender]:checked").value;
    object.class = document.querySelector("#sclass").value;
    object.marks = [];
    for(var i = 0; i < 6; i++) {
        object.marks[i] = parseInt(document.querySelector("#marks" + (i+1)).value);
    }
    this.Total();
    this.Percent();
    this.Average();
    this.result();
    this.displayStudentdetails();   
},
Total: function(){
    object.total = 0;
    for( var i = 0; i < object.marks.length; i++){
        this.total += object.marks[i];
    }
},
Percent(){
    object.percent = (object.total / 600) * 100;

},
Average(){
    this.avg = 0 ;
    this.avg = this.total / this.marks.length ;
},
result(){
    if(this.avg >= 60){
        this.grade = ' You got passed';
    } else{
        object.grade = ' You failed';
    }
},
displayStudentdetails(){
    document.querySelector(".class3").style.display = 'block';
    document.querySelector("#dname").innerText = object.name;
    document.querySelector("#dage").innerText = object.age;
    document.querySelector("#dgender").innerText = object.gender;
    document.querySelector("#dclass").innerText = object.class;
    for(var i = 0; i < object.marks.length; i++)
    {
        document.querySelector("#dmarks" + (i+1)).innerText = object.marks[i];
    }
    document.querySelector("#dtotal").innerText = object.total;
    document.querySelector("#dpercent").innerText = object.percent;
    document.querySelector("#davg").innerText = object.avg;
    document.querySelector("#dgrade").innerText = object.grade;
}
};