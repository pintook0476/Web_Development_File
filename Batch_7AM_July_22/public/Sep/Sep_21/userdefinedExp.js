var getDetails = () => {
    var data = {};
    data.name = document.querySelector("#uname").value;
    data.age = document.querySelector("#uage").value;
    data.age = parseInt(data.age);

   
    try {
        if (data.name == '' ) {
            throw 'Name_Empty';
        } else {
            document.querySelector(".nameErr").style.display = 'none'; 
        }

        if (data.age < 21) {
            throw 'Age_Invalid';
        } else {
            document.querySelector(".ageErr").style.display = 'none'; 
        }
    } catch(error) {
        switch(error) {
            case 'Name_Empty':
                document.querySelector(".nameErr").style.display = 'block';
                break;
            case 'Age_Invalid':
                document.querySelector(".ageErr").style.display = 'block'; 
                break;
        }
    }
}