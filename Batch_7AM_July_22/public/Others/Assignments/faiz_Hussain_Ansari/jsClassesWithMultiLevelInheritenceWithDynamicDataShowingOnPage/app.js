var sCompDetails = [];

class Cregistration {
    constructor(cDetails) {
        this.cName = cDetails.name;
        this.Code = cDetails.code;
    }
}

class Sregistration extends Cregistration {
    constructor(cDetails, sDetails) {
        super(cDetails)
        this.sName = sDetails.name;
        this.Age = sDetails.age;
        this.Gender = sDetails.gender;
        this.SportsSlected = sDetails.sports;
    }

}

class Tregistration extends Sregistration {
    constructor (cDetails, sDetails, tDetails) {
        super(cDetails, sDetails)
        this.teamName = tDetails.name;
        this.totalPlayer = tDetails.player;
        this.noOfMatches = tDetails.matches;
    }
    displayStudentDetails() {
        var ulTag = document.createElement('ul');
        ulTag.setAttribute('class', 'displaySDetails');
        var li1 = document.createElement('li');
        li1.innerText = 'Student Name : ';
        var span1 = document.createElement('span');
        span1.setAttribute('id','displaySName');
        span1.innerText = t1.sName;
        li1.append(span1);
        ulTag.append(li1);
        var li2 = document.createElement('li');
        li2.innerText = 'Student Age : ';
        var span2 = document.createElement('span');
        span2.setAttribute('id','displaySAge');
        span2.innerText = t1.Age;
        li2.append(span2);
        ulTag.append(li2);
        var li3 = document.createElement('li');
        li3.innerText = 'Student Gender : ';
        var span3 = document.createElement('span');
        span3.setAttribute('id','displaySGender');
        span3.innerText = t1.Gender;
        li3.append(span3);
        ulTag.append(li3);
        var li4 = document.createElement('li');
        li4.innerText = 'Sports Opted : ';
        var span4 = document.createElement('span');
        span4.setAttribute('id','displaySports');
        span4.innerText = t1.SportsSlected;
        li4.append(span4);
        ulTag.append(li4);
        var li5 = document.createElement('li');
        li5.innerText = 'College Name : ';
        var span5 = document.createElement('span');
        span5.setAttribute('id','displayCName');
        span5.innerText = t1.cName;
        li5.append(span5);
        ulTag.append(li5);
        var li6 = document.createElement('li');
        li6.innerText = 'College Code : ';
        var span6 = document.createElement('span');
        span6.setAttribute('id','displayCCode');
        span6.innerText = t1.cName;
        li6.append(span6);
        ulTag.append(li6);
        var li7 = document.createElement('li');
        li7.innerText = 'Team Name : ';
        var span7 = document.createElement('span');
        span7.setAttribute('id','displayTname');
        span7.innerText = t1.teamName;
        li7.append(span7);
        ulTag.append(li7);
        var li8 = document.createElement('li');
        li8.innerText = 'Total Players : ';
        var span8 = document.createElement('span');
        span8.setAttribute('id','displayTplayers');
        span8.innerText = t1.totalPlayer;
        li8.append(span8);
        ulTag.append(li8);
        var li9 = document.createElement('li');
        li9.innerText = 'No. Of Matches : ';
        var span9 = document.createElement('span');
        span9.setAttribute('id','displayTmatches');
        span9.innerText = t1.noOfMatches;
        li9.append(span9);
        ulTag.append(li9);
        document.querySelector('.tRegistration').after(ulTag);
        document.querySelector('.displaySDetails').style.display = 'block'
        console.log(ulTag);


        document.querySelector('#displaySName').innerHTML = this.sName;
        document.querySelector('#displaySAge').innerHTML = this.Age;
        document.querySelector('#displaySGender').innerHTML = this.Gender;
        document.querySelector('#displaySports').innerHTML = this.SportsSlected;
        document.querySelector('#displayCName').innerHTML = this.cName;
        document.querySelector('#displayCCode').innerHTML = this.Code;
        document.querySelector('#displayTname').innerHTML = this.teamName;
        document.querySelector('#displayTplayers').innerHTML = this.totalPlayer;
        document.querySelector('#displayTmatches').innerHTML = this.noOfMatches;
        document.querySelector('.displaySDetails').style.display = 'block'
        // document.querySelector('.cRegistration').style.display = 'none'
        // document.querySelector('.sRegistration').style.display = 'none'
        document.querySelector('.sucessfulRegistr').style.display = 'block'
    }
};
cObj = {};
getCollegeRegistration = () => {
    cObj.name = document.querySelector('#cName').value;
    cObj.code = document.querySelector('#cCode').value;
};

sObj = {};
getStudentRegistration = () => {
    sObj.name = document.querySelector('#sName').value;
    sObj.age = document.querySelector('#sAge').value;
    sObj.gender = document.querySelector('input[name=gender]:checked').value;
    sObj.sports = document.querySelector('#sSports').value;
    
}
getTeamRegistration = () => {
    tObj = {};
    tObj.name = document.querySelector('#tName').value;
    tObj.player = document.querySelector('#tPlayer').value;
    tObj.matches = document.querySelector('#tMatches').value;
    t1 = new Tregistration (cObj, sObj, tObj);
    sCompDetails.push(t1);
    console.log(sCompDetails);
    t1.displayStudentDetails()

};

for (var i = 0 ; i < sCompDetails.length; i++) {
    getTeamRegistration(sCompDetails[i]);
}