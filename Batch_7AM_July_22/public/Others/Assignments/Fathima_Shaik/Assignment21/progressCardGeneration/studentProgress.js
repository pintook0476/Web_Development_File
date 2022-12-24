var sdetails = {
readSdetails: function(){
    sdetails.name = document.querySelector("#sname").value;
    sdetails.age = document.querySelector("#sage").value;
    sdetails.gender = document.querySelector("input[name=gender]:checked").value;
    sdetails.class = document.querySelector("#sclass").value;
    sdetails.marks = [];
    for(var i = 0; i < 6; i++) {
        sdetails.marks[i] = parseInt(document.querySelector("#m" + (i+1)).value);
    }
    this.getTotal();
    this.getPercent();
    this.getAvg();
    this.getGrade();
    this.displaySdetails();   
},
getTotal: function(){
    sdetails.total = 0;
    for( var i = 0; i < sdetails.marks.length; i++){
        this.total += sdetails.marks[i];
    }
},
getPercent(){
    sdetails.percent = (sdetails.total / 600) * 100;

},
getAvg(){
    this.avg = 0 ;
    this.avg = this.total / this.marks.length ;
},
getGrade(){
    if(this.avg >= 60){
        this.grade = ' You got passed';
    } else{
        sdetails.grade = ' You have a Surprise';
    }
},
displaySdetails(){
    document.querySelector(".displayCard").style.display = 'block';
    document.querySelector("#dname").innerText = sdetails.name;
    document.querySelector("#dage").innerText = sdetails.age;
    document.querySelector("#dgender").innerText = sdetails.gender;
    document.querySelector("#dclass").innerText = sdetails.class;
    for(var i = 0; i < sdetails.marks.length; i++)
    document.querySelector("#dm" + (i+1)).innerText = sdetails.marks[i];
    document.querySelector("#dtotal").innerText = sdetails.total;
    document.querySelector("#dpercent").innerText = sdetails.percent;
    document.querySelector("#davg").innerText = sdetails.avg;
    document.querySelector("#dgrade").innerText = sdetails.grade;
}
};