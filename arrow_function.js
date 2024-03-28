/**
 * function with no arguments or no return 
 */
var helloJay= () => {

console.log("Jay Raj" );}

helloJay()

/**
 * Fn with Parameter and return
 */
 var sumOfTwoNumber=(a,b) =>{
    return a+b}
 console.log(sumOfTwoNumber(5,7));
 /**
  * Fn with  para , multiple lines of body
  */
 var process=(a,b) =>{
    console.log("need to Process")
    console.log(arguments) // arguments : global object 
    return a*b
 }
 console.log(process(5,8));