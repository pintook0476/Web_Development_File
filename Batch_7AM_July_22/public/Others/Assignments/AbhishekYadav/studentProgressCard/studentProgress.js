var progressCard = {
    readValues() {
        this.sname = document.querySelector("#sName").value;
        this.sage = document.querySelector("#sAge").value;
        this.sgender = document.querySelector("input[name=gender]:checked").value;
        this.sclass = document.querySelector("#sClass").value;
        this.marks = [];
        for (i = 0; i < 5; i++) {
            var mrk = document.querySelector("#mark" + (i + 1)).value;
            mrk = parseInt(mrk);
            this.marks.push(mrk);
        };
        this.calculateavg();
        this.showdeta();
    },
    calculateavg() {
        var total = 0;
        for (j = 0; j < this.marks.length; j++) {
            total += this.marks[j];
        }
        this.avg = total / this.marks.length;
    },
    showdeta() {
        document.querySelector("#showconta ul").style.display = 'block';
        document.querySelector("#stname").innerHTML = this.sname;
        document.querySelector("#stage").innerHTML = this.sage;
        document.querySelector("#stgender").innerHTML = this.sgender;
        document.querySelector("#stclass").innerHTML = this.sclass;
        document.querySelector("#stavg").innerHTML = this.avg;

    }


}