// import {count, getAdditionValues} from "./mathUtil.js"

import * as math from "./mathUtil.js";

console.log("count value from app.js " + math.count);



document.querySelector("#addbtn").addEventListener("click", () => {
    var fval = document.querySelector("#fval").value;
    var sval = document.querySelector("#sval").value;
    var result = math.getAdditionValues(fval, sval);
    document.querySelector("#rblock").innerText = 'The sum of values is ' + result;
})