console.log("from app.js");

var myworker = new Worker("myworker.js");
myworker.onmessage = (event) => {
    console.log("got message from worker" + event.data)
    document.querySelector(".dateContainer").innerText = event.data;
    myworker.terminate();
}

var count = 0;
var addBlock = () => {
    count++;
    var divTag = document.createElement("div");
    divTag.innerHTML = `BLOCK ${count}`;
    document.querySelector(".mainContainer").append(divTag);
}


var myinterval = setInterval(() => {
    addBlock();
    if (count == 5) {
        clearInterval(myinterval)
    }
}, 1000);

