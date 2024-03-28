/**

  * Var :

  * 1.used to define a variable

  * 2.It has function scope but no block scope

  * 3. It is hoisting

  * */

function f1(){

    var i =5

    console.log(i)

  }

  f1()

  console.log(i) // function ke ander h bs so function scope

   

 {

   var i =5

 }

 console.log(i) // yaha block ke bahar bhi o/p dega


  console.log(x) // yaha error isliye nhi aa rha kyonki x hoisted ho jayega top pe , pr value assign nhi krega

  var x =25

  console.log(x)

 

  /**

   * Let :

   * 1.No hoisting

   * 2. It has both function scope & block scope

   */

  
   {

     let name="Jay"

   }

   console.log(name) // let :block scope

   

   /**

    * Const :

    * 1.Scope is exactly same as let

    * 2. Const variable are final , can't be re-assigned a value */

