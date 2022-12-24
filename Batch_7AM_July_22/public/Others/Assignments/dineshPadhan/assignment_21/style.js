var loadreport = (report) => {

    document.querySelector('.reportcard').style.display = 'block';
    document.querySelector('.report').style.display = 'block';
    document.querySelector('.formInput').style.display = 'none';

    document.querySelector(".name").innerText = document.querySelector("#stdname").value;

    document.querySelector(".level").innerText = document.querySelector("#level").value;

    document.querySelector(".adviser").innerText = document.querySelector("#adviser").value;

    document.querySelector(".section").innerText = document.querySelector("#section").value;

    document.querySelector(".writting").innerText = document.querySelector("#writting").value;

    document.querySelector(".reading").innerText = document.querySelector("#reading").value;

    document.querySelector(".speaking").innerText = document.querySelector("#speaking").value;

    document.querySelector(".langauage").innerText = document.querySelector("#langauage").value;

    document.querySelector(".counting").innerText = document.querySelector("#counting").value;

    document.querySelector(".art").innerText = document.querySelector("#art").value;

    document.querySelector(".playing").innerText = document.querySelector("#playing").value;

    document.querySelector(".remark").innerText = document.querySelector("#remark").value;

    var total = parseInt(document.querySelector("#writting").value) + parseInt(document.querySelector("#reading").value )+ parseInt(document.querySelector("#speaking").value) + parseInt(document.querySelector("#langauage").value) + parseInt(document.querySelector("#counting").value) + parseInt(document.querySelector("#art").value) + parseInt(document.querySelector("#playing").value);

    document.querySelector(".total").innerText = total;

    if (((total*100)/700)>=90) {
        document.querySelector(".grade").innerText="A+"
    } else if(((total*100)/700)>=80) {
        document.querySelector(".grade").innerText="A"
    }else if (((total*100)/700)>=70) {
        document.querySelector(".grade").innerText="B+"
    }else if (((total*100)/700)>=60) {
        document.querySelector(".grade").innerText="B"
    } else if(((total*100)/700)>=50) {
        document.querySelector(".grade").innerText="C+"
    }else if (((total*100)/700)>=40) {
        document.querySelector(".grade").innerText="C"
    }
    else if (((total*100)/700)>=30) {
        document.querySelector(".grade").innerText="D"
    }
    else if (((total*100)/700)<=30) {
        document.querySelector(".grade").innerText="Faill"
    }
}