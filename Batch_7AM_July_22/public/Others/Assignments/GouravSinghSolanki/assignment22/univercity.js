var sdetails = {
    readSdetails(){
        console.log("123")
        this.college = document.querySelector("#college").value ;
        this.collegeCode = document.querySelector("#collegeCode").value ;
        this.name = document.querySelector('#sname').value ;
        this.fathersName = document.querySelector("#sFatherName").value ;
        this.id = document.querySelector("#sId").value ;
        this.age = document.querySelector("#sage").value ;
        this.gender = document.querySelector("input[name=gender]:checked").value ;
        this.dept = document.querySelector("#sdept").value ;
        
        document.querySelector(".section1").classList.add('hide');
        document.querySelector(".section2").classList.remove('hide');
    }
}
document.querySelector("#submitButton").addEventListener('onclick',sdetails.readSdetails());
