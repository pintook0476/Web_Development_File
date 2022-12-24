
var loaddetails = () => {
    sname = document.querySelector("#name").value;
    age = document.querySelector("#age").value;
    gender = document.querySelector("input[name=gender]:checked").value;
    classs = document.querySelector(".classes").value;
    var marks =[];
    for (var i = 0;i < 5 ; i++){
        marks[i] = document.querySelector("#m" + (i+1)).value;
        marks[i] = parseInt(marks[i]);
        marks.push(marks[i]);
    }
    console.log(marks);
    calc(sname , age , gender , classs , marks);
}

var calc = ( sname , age , gender , classs , marks) => {
    var total = 0;
        for(var i = 0; i < marks.length; i++){
            total += marks[i];
        }
    var avg = total / marks.length;
    getgrade(sname , age , gender , classs , total ,avg );
} 

var getgrade = (sname , age , gender , classs , total ,avg ) => {
    if (avg >= 35){
        grade = "ur passed";
    }else{
        grade  ="ur failed";
    }
    displaying(sname , age , gender , classs , total ,avg, grade);
    
}

var displaying = (sname , age , gender , classs , total ,avg , grade) => {
    document.querySelector("#displayname").innerHTML = "Name :" + sname; 
    document.querySelector("#displayage").innerHTML = "Age:" + age;
    document.querySelector("#displaygender").innerHTML = "Gender :" + gender;
    document.querySelector("#displayclass").innerHTML =  classs;
    document.querySelector("#displaytotal").innerHTML = "total :" + total;
    document.querySelector("#displayavg").innerHTML = "avg :" + avg;
    document.querySelector("#displaygrade").innerHTML = "Grade :" + grade;
    document.querySelector(".container").style.display = 'block'; 
    document.querySelector(".form").style.display = "none";
}


