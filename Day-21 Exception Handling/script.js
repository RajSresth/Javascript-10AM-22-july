/*
let a=1;
let b=2;
let c=3;

try {
    console.log("Try Block start")
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log("Try Block End")
} catch (error) {
    console.log("Catch Block Start")
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log("Finally Block start")
    console.log(a)
    console.log(b)
    console.log(c)
} */


try {
    const fullname=prompt("Enter user name");
    if(fullname==="")
    {
        throw new Error("Name is not passed by the user");        
    }
    else{
        console.log("User Name: "+fullname)
    }
    
} catch (err) {
    console.log(err);
    console.log(err.message);
}

