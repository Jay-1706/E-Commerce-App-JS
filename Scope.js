/**Three types of scopes:
1.Global Scope 
2.Function scope
3.Block scope **/ 
// Function scope - Local Scope

/**1. Global Scope Variable :- Jab kisi variable ko function ke bahar 
     define krte h or block of code ke bahar define kerte h usse global variable kehte h*/
      var name ="Jay"
      console.log(name);

      function fun(){
        console.log(name);
      }
      fun()
      

/**2. Function  Scope : Function/block of code ke ander hi variable
 * rhega
 */

function fun1(){
     var num = 55
     console.log(num);
}
fun1()
// Undefined, reason :  fun ke bahar h

/**3.Block Scope : Jo curley braces {} ke ander rhte h
 */
{ 
    var x =20 // yaha pr let used nhi kr skte nhi to bahar Anonymous aa jayega
    console.log(x)
}
console.log(x) 