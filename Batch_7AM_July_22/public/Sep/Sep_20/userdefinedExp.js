var getDetails = () => {
    var data = {};
    data.name = document.querySelector("#uname").value;
    data.age = document.querySelector("#uage").value;
    data.age = parseInt(data.age);

   
    if (data.name == '') {
        document.querySelector(".nameErr").style.display = 'block'; 
    } else {
        document.querySelector(".nameErr").style.display = 'none'; 
    }
    if (data.age < 21) {
        document.querySelector(".ageErr").style.display = 'block'; 
    } else {
        document.querySelector(".ageErr").style.display = 'none'; 
    }
}