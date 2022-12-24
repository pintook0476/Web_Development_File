var eDetails = {
    getData() {
        this.ename = document.querySelector("#ename").value;
        this.eage = document.querySelector("#eage").value;
        this.egender = document.querySelector("input[name=egender]:checked").value;
        this.eexperience = document.querySelector("#eexperience").value;
        this.edepart = document.querySelector("#edepart").value;
        this.eBsal = document.querySelector("#eBsal").value;
        this.eBsal = parseInt(this.eBsal);
        this.calculatePfAndHra();
        this.getTaxPer();
        this.showData();
    },
    calculatePfAndHra() {
        this.pf = this.eBsal * 25 / 100;
        this.hra = this.eBsal * 12 / 100;
        this.Tsal = this.eBsal + this.pf + this.hra;
    },
    getTaxPer() {
        if (this.egender == 'Male') {
            if (this.Tsal > 200000) {
                this.taxTobePaid = 25;
            } else if (this.Tsal > 100000) {
                this.taxTobePaid = 15;
            } else if (this.Tsal > 50000) {
                this.taxTobePaid = 5;
            }
        };
        if (this.egender == 'Female') {
            if (this.Tsal > 200000) {
                this.taxTobePaid = 20;
            } else if (this.Tsal > 100000) {
                this.taxTobePaid = 10;
            } else if (this.Tsal > 50000) {
                this.taxTobePaid = 2;
            }
        }
    },
    showData() {
        document.querySelector("#fcontainer").style.display = 'block';
        document.querySelector("#fname").innerHTML = this.ename;
        document.querySelector("#fage").innerHTML = this.eage;
        document.querySelector("#fexperience").innerHTML = this.eexperience;
        document.querySelector("#fgender").innerHTML = this.egender;
        document.querySelector("#fbsal").innerHTML = this.eBsal;
        document.querySelector("#ftsal").innerHTML = this.Tsal;
        document.querySelector("#etaxtobe").innerHTML = this.taxTobePaid;
    }
}