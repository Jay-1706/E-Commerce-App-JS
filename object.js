const user={

    name :"Jay",
 
    age :24 ,
 
    city:"Haridwar"
 
     }
 
 
  //Accessing the data
 
 console.log(user.name) // : dot notation
 
 //or
 
 console.log(user['name']) // : square bracket notation - isme key value always within inverted comma
 
 
  //Adding data to Object
 
 user.country="India"
 
 user["continent"]="Asia"
 
 console.log(user)
 
 
  //Deleting Object Keys and object itself
 
 delete user.country
 
 console.log(user)
 
 delete user['continent']
 
 console.log(user)
 
 
  //Iterate
 
 let person={
 
    name :"Raj" ,
 
    age:23,
 
    address:{
 
           city:"Haridwar" ,
 
           state:"Uttrakhand" ,
 
           country:"India"
 
    }
 
 }
 
  
 
 for(let key in person){
 
    console.log(key , ":", person[key])
 
 }
 
  
 
 console.log(Object.keys(person)) // Object : Global value , keys :already defined in js , (iske ander apna custom object dena prega)
 
  
 
 console.log(Object.values(person))
 
  
 
 console.log(Object.entries(person)) // get Both keys and the value
 
  
 
  
 
 /**
 
 * Cloning an object using assign
 
 * */
 
   const new_person=Object.assign({},person)
 
   console.log(new_person)
 
  
 
   //Add new features to the clone
 
     const new_person_1=Object.assign({},person ,{role:"Developer"})
 
     console.log(new_person_1)