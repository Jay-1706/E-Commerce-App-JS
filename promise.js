/**
 * Sneha Promises to Raj*/
 
const snehaPromise =new Promise((resolve , reject) => {//resolve ,reject ke jagah koi bhi parameter le skte ho like x,y etc

    let parentDecision = true

    if(parentDecision){
        resolve("Yayy,ab shaadi ki tayari karo")
    }else{
        reject("Papa ne IAS dhoond liya hai!,Sorry...")
    }
});

snehaPromise.then((msg , pd)=>{
    console.log("Sneha message :" ,msg);
    console.log("Parent Decison was",pd);
    console.log("Let's book the weeding Value");
}) .catch((msg,pd)=>{
    console.log("Sneha message :" ,msg);
    console.log("Parent Decison was",pd);
    console.log("Tinder kha ho yaar!");
}).finally 
    console.log("Jindagi me kuch krna h")



const f1Promise =new Promise((resolve,reject)=>{

    setTimeout(()=>{



    if(Math.random()>0.5){
         resolve("Hey I a in for Goa")
    }else{
        reject("sorry mere pet me dard h")
    }

},10000)
})

const f2Promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{

    if(Math.random()>0.5){
         resolve("Hey I am absolutely in for Goa")
    }else{
        reject("sorry mere sir  me dard h")
    }

},2000)
})

const f3Promise =new Promise((resolve,reject)=>{

    setTimeout(()=>{

 

    if(Math.random()>0.5){
         resolve("Hey I prepared in for Goa")
    }else{
        reject("PW ka live session h")
    }

},4000)
})


Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
console.log(msg);
console.log("Yay we are going to goa");
}).catch((msg)=>{
    console.log(msg);
    console.log("Yaar bAnd Kro Goa ka Plan banana!");
})



const g1Promise =new Promise((resolve,reject)=>{

    setTimeout(()=>{

 

    if(Math.random()>0.5){
         resolve("Hey I will comw for Dinner")
    }else{
        reject("GF1:My Father is coming")
    }

},6000)
})
const g2Promise =new Promise((resolve,reject)=>{

    setTimeout(()=>{

 

    if(Math.random()>0.5){
         resolve("Hey I will come to meet u")
    }else{
        reject("My father is coming")
    }

},5000)
})
const g3Promise =new Promise((resolve,reject)=>{

    setTimeout(()=>{

 

    if(Math.random()>0.5){
         resolve("Come at my Home")
    }else{
        reject("I am going to Temple")
    }

},8000)
})

Promise.all([g1Promise,g2Promise,g3Promise]).then((msg)=>{
    console.log(msg);
    console.log("My Valentine day is Shorter");
    }).catch((msg)=>{
        console.log(msg);
        console.log("I have to join BajrangDal!");
    })


