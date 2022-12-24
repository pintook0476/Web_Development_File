var studentDetails = []

openstData=()=>{
    document.querySelector(".stdData").style.display="block";
    document.querySelector(".schoolData").style.display="none";
}
sumbitData=()=>{
    document.querySelector(".stdData").style.display="none";
    document.querySelector(".details").style.display="block";
    schoolinputData();
    studentinputData();

}
var clg ={}
var schoolinputData=()=>{
    clg.schoolName= document.querySelector("#sName").value
    clg.schoolCode= document.querySelector("#scCode").value
}
var studentinputData=()=>{
    var std={}
    std.stdName= document.querySelector("#sName").value
    std.stdRoll= document.querySelector("#sRoll").value
    std.stdGender= document.querySelector("input[name='gender']:checked").value
    std.stdDoB= document.querySelector("#sDate").value
    std.stdAdd= document.querySelector("#sAdd").value
    // console.log(stdAdd);
    var stdinput = new studentData(clg,std)
    stdinput.stdoutputData();

    studentDetails.push(stdinput);
    console.log(studentDetails);

}

class CollegeDetails{
    constructor(clg){
    this.clgName = clg.schoolName;
    this.clgCode = clg.schoolCode;
    }
    displayCollegeDetails() {
        console.log(this.clgName)
        document.querySelector("#schoolname").innerHTML=this.clgName
        document.querySelector("#schoolcode").innerHTML=this.clgCode
    }
}
class studentData extends CollegeDetails{
    constructor(cdata,sdata){
        super(cdata)
            this.sudentName = sdata.stdName;
            this.sudentRoll = sdata.stdRoll;
            this.sudentGender = sdata.stdGender;
            this.sudentDoB = sdata.stdDoB;
            this.sudentAdd = sdata.stdAdd;
    }
    stdoutputData(){
        this.displayCollegeDetails();
        document.querySelector("#stdname").innerHTML=this.sudentName
        document.querySelector("#stdroll").innerHTML=this.sudentRoll
        document.querySelector("#stdgender").innerHTML=this.sudentGender
        document.querySelector("#stddob").innerHTML=this.sudentDoB
        document.querySelector("#stdaddress").innerHTML=this.sudentAdd
    }
}