var readData = () => {
    var name = document.querySelector("#sname").value;
    var age = document.querySelector("#sage").value
    var gender = document.querySelector("#sgender").value
    var sclass = document.querySelector("#sclass").value
    var hindi = document.querySelector("#hindi").value
    hindi = parseInt(hindi);
    var english = document.querySelector("#english").value
    english = parseInt(english);
    var maths = document.querySelector("#maths").value
    maths = parseInt(maths)
    var physics = document.querySelector("#physics").value
    physics= parseInt(physics);
    var chemistry = document.querySelector("#chemistry").value
    chemistry = parseInt(chemistry);
    
    document.querySelector(".block1").classList.add('hide');
    document.querySelector(".block2").classList.remove('hide');

    var total = hindi + english + maths + chemistry + physics;
    var avg = total/5;
    var grade;
    if(avg > 50 ){
        grade = "Pass";
    }else{
        grade = "Fail";
    }
    document.querySelector("#nameout").innerText = name ;
    document.querySelector("#ageout").innerText = age ;
    document.querySelector("#genderout").innerText = gender ; 
    document.querySelector("#sclassout").innerText = sclass ; 
    document.querySelector("#total").innerText = total; 
    document.querySelector("#avg").innerText = avg ; 
    document.querySelector("#grade").innerText = grade ;
    
}
