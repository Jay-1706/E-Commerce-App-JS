/*function getMessage(){
    return "Hello Jay"
}

console.log(getMessage());

// async : starts returning promise at object
 async function getMessage1(){
    return "Hello Students"
}

console.log(getMessage1());
getMessage1().then(result => console.log(result));*/

/**
 * Print Hello after a wait
 */
/*
function printHelloAfterWait(){

    console.log("First Line");
    setTimeout(()=>{
        console.log("Hello Bachho");
    },7000)
    console.log("Last Line");
}
printHelloAfterWait()*/

// yaha pe first line ke baad last line print ho rha
     // pr mai chahta hu first line ke baad wait krke Hello Bachho ko Print Krana h
     // so , Async-Await use krenge
    console.log("Hello From Begining");
     async function printHelloAfterWait(){

        console.log("First Line");

        let data = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Hello Bachho")
        },2000)
    })

    let result = await data //start waiting for the data promise to be completed
    console.log(result);
        console.log("Last Line");
        
    }
    printHelloAfterWait()
    console.log("Hello From End");