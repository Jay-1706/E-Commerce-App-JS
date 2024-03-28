/**
 * 1.Noraml Function/First Oredr Function : Takes Parameter as Primitive or Object and return also as Primitive or object
      
  2. High Order Function : Takes parameter as Object/Function also & Return also as Function/object

*/

//we can write HOF as two ways
//First ways

/*function operation(operatorFn ,a,b){   
     
    return operatorFn(a,b) // opertorFn is a function which takes a,b as a argument
                           // operation  is a HOF

 }

  function add(a,b){
  return a+b
  }

  let result=operation(add,5,6)

console.log(result);*/

//Second ways
 
function getGreetMethod(){
    return function(){
          console.log("Hello Jay Raj"); // anonymous fun
    }
}

let greetFn =getGreetMethod()
console.log(typeof greetFn);

greetFn()