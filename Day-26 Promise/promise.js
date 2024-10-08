let res=true;

const promise1=new Promise(function(resolve,reject){
    if(res)
    {
        resolve("Task is Completed") 
    }
    else{
        reject("Response not found")    
    }
})


promise1
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
.finally(()=>console.log("Welcome to our Website"))