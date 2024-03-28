//Mostly used in Async 
function greet(name,callback){
    const greeting="Hello"+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message);
}

greet("Jay",displayGreeting)

/**
 * Callback Hell or Pyramid Hell : Try to Avoid
 */

getUser(function(user){ 
    getPosts(user.id),function(post){
        displayUserInfoAndPost(user,posts,function(){
            console.log("user info and posts sucessfully displayed");
        })
    }
})