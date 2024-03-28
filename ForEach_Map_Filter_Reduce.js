/**
 * forEach Method
 */

players =["Sachin","Dhoni","Virat","Rohit"]

players.forEach((player)=>console.log(player)) // forEach is a Hof so takes player => as a argumrnt ke tarh liya

/**
 * map
 */
arr=[1,2,3,4,5,6]

cube_arr=arr.map(num => num**3)

console.log(cube_arr);

console.log(arr);

/**
 * Filter
 */
 
let arr1=[1,2,3,4,5,6,7,8,9,10]

let even_arr= arr1.filter((num)=>num%2==0)
console.log(even_arr);

/**
 * Reduce
 */
 const sum=[1,2,3,4,5,6,7,8,9,10,11,12].reduce((curr,next)=>curr+next)

 console.log(sum);