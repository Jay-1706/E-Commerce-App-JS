 /**

  * Destructuring : Fetch the values out of arrays & Object 7 go to assign a variable

  * */

 const nums=[1,2,3]

 

 const [a,b,c,d] =[1,2,3]

 console.log(a)

 console.log(b)

 console.log(c)

 console.log(d)



 const [p,q,r] = [1,2,[3,4,5]]

 console.log(p)

 console.log(q)

 console.log(r)



 

 /**

  * Destructuring In object*/

 

  const person={

       age:25,

       name:"Jay Raj",

       city:"Haridwar",

       address:{

            dist :"HW",

            state:"Uttrakhand",

            country:"India"

       }

  }

 

  const{name,age,address:{dist,state,country}}=person

  console.log(name)

  console.log(age)

  console.log(dist)