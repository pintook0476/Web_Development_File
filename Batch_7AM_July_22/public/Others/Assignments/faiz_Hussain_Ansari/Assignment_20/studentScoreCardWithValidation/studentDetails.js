nameValidation = (event) => {
    console.log(event);
    if (event.keyCode >=65 && event.keyCode <=90 || event.keyCode >=97 && event.keyCode <= 122 || event.keyCode == 32 ) {
        document.querySelector('.nameCharMandate').style.display = 'none';
        return true;  
    } else {
        document.querySelector('.nameCharMandate').style.display = 'block';
        return false
        
    }
}
ageValidation = (event) => {
    console.log(event)
    if (event.keyCode >= 48 && event.keyCode <= 57){
        document.querySelector('.ageNumMandate').style.display = 'none';
        return true;
    }  else {
        document.querySelector('.ageNumMandate').style.display = 'block';
        return false
        
    }
}
marksValidation = (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57){
        document.querySelector('.marksNumMandate').style.display = 'none';
        return true;
    }  else {
        document.querySelector('.marksNumMandate').style.display = 'block';
        return false
        
    }
}
var sDetails = {
    studentProgessDetails() {

        sDetails.name = document.querySelector('#sName').value;
        if (!this.name) {
            document.querySelector(".nameMandateErr").style.display = 'block'
            return
        } else {
            document.querySelector(".nameMandateErr").style.display = 'none'
        }
        sDetails.age = document.querySelector('#sAge').value;
        if (!this.age) {
            document.querySelector(".ageMandateErr").style.display = 'block'
            return
        } else {
            document.querySelector(".ageMandateErr").style.display = 'none'
        }
        sDetails.gender = document.querySelector('input[name=gender]:checked').value;
        sDetails.loc = document.querySelector('#sLocation').value;
        sDetails.class = document.querySelector('#sClass').value;

        this.sTotalAndAvg() 
    },

    sTotalAndAvg() {
        sDetails.marks = [];
        for (i = 0; i < 4; i++) {
            sDetails.marks[i] = document.querySelector('#marks' + (i + 1)).value;
            if (!this.marks[i]) {
                document.querySelector(".marksMandateErr").style.display = 'block'
                return
            } else {
                document.querySelector(".marksMandateErr").style.display = 'none'
            }

        }
        
        sDetails.total = 0;
        for (i = 0; i < sDetails.marks.length; i++) {
            sDetails.marks[i] = parseInt(sDetails.marks[i]);
            sDetails.total += sDetails.marks[i];
        }
        sDetails.avg = 0;
        sDetails.avg = sDetails.total / sDetails.marks.length;
        this.sGrade()
    },

    sGrade() {
        if (sDetails.avg >=60) {
            sDetails.result = 'You are Passed'
        } else {
            sDetails.result = 'You got Surprise'
        }
        this.displayingDetails()
    },

    displayingDetails() {
        document.querySelector('#displayName').innerHTML = (sDetails.name);
        document.querySelector('#displayAge').innerHTML = (sDetails.age);
        document.querySelector('#displayGender').innerHTML = (sDetails.gender);
        document.querySelector('#displayLoc').innerHTML = (sDetails.loc);
        document.querySelector('#displaycClass').innerHTML = (sDetails.class);
        document.querySelector('#displayTotal').innerHTML = (sDetails.total);
        document.querySelector('#displayAvg').innerHTML = (sDetails.avg);
        document.querySelector('#displayResult').innerHTML = (sDetails.result);
        document.querySelector('.showingData').style.display = 'block';
        document.querySelector('.sDetails').style.display = 'none';

    }

}


