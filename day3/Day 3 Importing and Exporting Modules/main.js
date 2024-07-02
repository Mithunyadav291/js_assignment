import { add } from "./mathOperation.js"

document.getElementById("add").addEventListener("click", () => {
    let a = parseInt(document.getElementById("fn").value);
    let b = parseInt(document.getElementById("sn").value);
    let c = add(a, b);
    document.getElementById("result").value = c;
})

import { subtract } from "./mathOperation.js"

document.getElementById("sub").addEventListener("click", () => {
    let a = parseInt(document.getElementById("fn").value);
    let b = parseInt(document.getElementById("sn").value);
    let c = subtract(a, b);
    document.getElementById("result").value = c;
})