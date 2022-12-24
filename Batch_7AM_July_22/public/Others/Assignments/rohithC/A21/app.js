var Alldetials = [] 

class collegedetails {
    constructor(data){//passing data    
        this.cname = data.collageName;
        this.ccode = data.collageCode;
    }
       
}

class studentdetails extends collegedetails {
    constructor(sdata,data){ //passing sdata,data
        super(data);//catching data
        this.sname = sdata.sname;
        this.age = sdata.sage;
        this.class = sdata.sclass;
        this.gender = sdata.gender;
        this.sport = sdata.sport;
    }

    display(){
        document.querySelector(".dclg").innerHTML = this.cname;
        document.querySelector(".dclgcode").innerHTML = this.ccode;
    }
    display2 () {
        document.querySelector(".dname").innerHTML = this.sname;
        document.querySelector(".dage").innerHTML = this.age;
        document.querySelector(".dgender").innerHTML = this.gender;
        document.querySelector(".dclass").innerHTML = this.class;
        document.querySelector(".dsports").innerHTML = this.sport;
        this.display();
    }
}

var data = {}
var collegedetailsdisplay = () => {  
    data.collageName = document.querySelector(".cname").value
    data.collageCode = document.querySelector(".ccode").value; 
}

var studentdetailsdisplay = () => {
    var sdata= {}
    sdata.sname = document.querySelector(".sname").value;
    sdata.sage = document.querySelector(".sage").value;
    sdata.sclass = document.querySelector(".classes").value;
    sdata.gender = document.querySelector("input[name=gender]:checked").value;
    sdata.sport =document.querySelector(".sport").value;

    document.querySelector(".displayDetails").style.display = "block";

    var ab = new studentdetails(sdata,data); //catching sdata,data
    ab.display2();

    //console.log("abc");

    Alldetials.push(ab);
    //console.log(Alldetials);

    document.querySelector(".allContainer").innerHTML = Alldetials;

    document.querySelector(".cname").value = " ";
    document.querySelector(".ccode").value = " ";
    document.querySelector(".sname").value = " ";
    document.querySelector(".sage").value = " ";
    document.querySelector(".Gender").value = " ";
    document.querySelector(".classes").value = " ";
    document.querySelector(".sport").value = " ";
}

