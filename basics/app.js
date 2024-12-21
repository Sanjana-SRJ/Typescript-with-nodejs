"use strict";
const num1element = document.getElementById("num1");
const num2element = document.getElementById("num2");
const buttonelement = document.querySelector("button");
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
// console.log(add(1,5))   //will workx
// console.log(add(1, "5")); ///will not work
// one way to handle strict = true point/
// if(buttonelement){
//     buttonelement?.addEventListener('click', ()=>{
//         const num1 = num1element.value;
//         const num2 = num2element.value;
//         const result = add(+num1, +num2);
//         console.log(result); 
//     })
// }
buttonelement === null || buttonelement === void 0 ? void 0 : buttonelement.addEventListener('click', () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
