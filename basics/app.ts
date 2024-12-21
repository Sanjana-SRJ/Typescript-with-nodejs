const num1element=document.getElementById("num1") as HTMLInputElement;
const num2element=document.getElementById("num2") as HTMLInputElement;
const buttonelement = document.querySelector("button")!;


const numResults: Array<number>= [];
const stringResults: string[] = [];

type NumOrString = number | string
type Obj = {val: number; timestamp: Date}

interface ResultObj{
    val: number;
    timestamp: Date
}
function add(num1:NumOrString, num2:NumOrString){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }else if(typeof num1 === "string" && typeof num2 ==="string"){
        return num1 + ' '+num2
    }else{
        return +num1 + +num2
    }
}

function printResult(resultObj :ResultObj){
    console.log(resultObj.val)
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


buttonelement?.addEventListener('click', ()=>{
    const num1 = num1element.value;
    const num2 = num2element.value;

    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult as string);
    printResult({val: result as number, timestamp: new Date()})
    console.log(numResults, stringResults);
})

const myPromise = new Promise<string>((resolve, reject) =>{
    setTimeout(()=> {
        resolve("It worked!")
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'))
})