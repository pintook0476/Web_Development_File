var sDetails = {
    studentProgessDetails() {

        sDetails.name = document.querySelector('#sName').value,
            sDetails.age = document.querySelector('#sAge').value,
            sDetails.gender = document.querySelector('input[name=gender]:checked').value;
        sDetails.loc = document.querySelector('#sLocation').value;
        sDetails.class = document.querySelector('#sClass').value;
        this.sTotalAndAvg() 
    },

    sTotalAndAvg() {
        sDetails.marks = [];
        for (i = 0; i < 4; i++) {
            sDetails.marks[i] = document.querySelector('#marks' + (i + 1)).value;

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


