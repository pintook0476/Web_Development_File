var reportData = {
    getTotalAndAvg ()
    {
        this.total = 0;
        for(var i = 0 ; i < this.marks.length ; i++)
        {
            this.total += this.marks[i];
        }

        this.avg = this.total / this.marks.length;
        this.getGrade();
    },

    getGrade () 
    {
        if(this.avg > 60 )
        {
            this.grade = 'Pass';
        }
        else
        {
            this.grade = 'Fail';
        }

    },

    readStuData ()
    {
        this.name = document.querySelector("#sName").value;
        this.age = document.querySelector("#sAge").value;
        this.gender = document.querySelector("input[name = gender]").value;
        this.streem = document.querySelector("#course").value;
        this.marks = [];
        for (var i = 0 ; i < 5 ; i++)
        {
            var value = document.querySelector("#m" + (i+1)).value;
            this.marks.push(parseInt(value));
        }
        
            
        this.displayData();

    },
    displayData ()
    {
        this.getTotalAndAvg();
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dcourse").innerText = this.streem;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;
    }

   
}
