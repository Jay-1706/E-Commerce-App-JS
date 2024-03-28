/*function hello(){
    let name="Jay"
    console.log(name);
}
hello()

console.log(name)*/;// ye wala line execute nhi hoga ,Reason:let block scope h

// so isi block scope wale ko bahar bhi execute krne ke liye closures use krte h

function outerFn(){
  let outerVar="I am from the outer function"
  function innerFn(){
         console.log(outerFn);
  }
   
   return innerFn
}
  
  let fn=outerFn() //All the local variable has destroyes

  //fn() // I am still able to hold the local variable of outerFn

  function customerCounter(){
     let count =0
      return function(){
         count++
         console.log("New customer count is",count);
      }
  }
  let counter=customerCounter
  counter()

  //Closure ka use encapsulation that is data hide wagere ke liye