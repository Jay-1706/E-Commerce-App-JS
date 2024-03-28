//Definition
function helloJay(){
    console.log("Hello Jay");
}
helloJay()

function sumOfTwoNumber(a,b){ // a & b : parameter
    return a+b; 
}

console.log(sumOfTwoNumber(5,6)); // 5 & 6 : arguments - parameter ki values dena argument hota h
 
// default value : agar argumnt pass nhi krte to o/p NaN aa jata so Default value
function sumOfTwoNumber(a,b=7){ // a & b : parameter
    return a+b; 
}

console.log(sumOfTwoNumber(5));

function fun(){
    console.log(arguments);

}
fun(1,2,3,4,5,6)