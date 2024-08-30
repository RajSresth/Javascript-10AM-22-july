/*HOF
function company(call,name,city){
    call(name,city)
    console.log("Completed")
}

// CBF
function user(username="Chombu",city="Noida"){
    console.log(`User Name: ${username}`)
    console.log(`City: ${city}`)
}

company(user,); */

/*
//HOF
function company(call,name,isWorking)
{
       
        call(name,isWorking)
        console.log("Completed")
}

// CBF
company((name,isWorking)=>{
    console.log(`User Name is: ${name}`)
    console.log(`Working: ${isWorking}`)
},"Lekhraj",false)  */

const companyInfo=(call1,call2,comName,req,salary,name,age,state,pin)=>{
    console.log(`Company Name: ${comName}`);
    console.log("=================")
    call1(req,salary)
    console.log("=================")
    call2(name,age,state,pin)

}



companyInfo(function (req,sal,){
    console.log(`Requirement ${req}`)
    console.log(`Salary ${sal}`)
   
},function (name,age,state,pin){
    console.log(`Candiate Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`State: ${state}`)
    console.log(`Pincode: ${pin}`)
},"XYZ","SDE","10LPA","Aasif",20,"Delhi","Rohini")








