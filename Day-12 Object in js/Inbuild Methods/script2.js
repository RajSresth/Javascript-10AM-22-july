/* const obj={
    name:"Tinku",
    age:21,
    state:"up"
}

Object.seal(obj)
console.log(Object.isSealed(obj))
// obj.city="Noida" No insertion
// delete obj.state No Deletion
obj.age=27  //Updation allowed
console.log(obj)  */

/*
const obj={
    name:"Tinku",
    age:21,
    state:"up"
}

const res=Object.getOwnPropertyNames(obj)
console.log(obj.hasOwnProperty("state")) */

/*
const obj={
    name:"Tinku",
    age:21,
    state:"up"
}

// console.log(Object.is(obj.state,'UP'))

if(Object.is("up",obj.state))
{
    console.log("Badhmash Chora..!!")
}  */

/*
    const obj={
        name:"Tinku",
        age:21,
        state:"up"
    }
    Object.preventExtensions(obj)
    console.log(Object.isExtensible(obj))  

   obj.state="Delhi"
   delete obj.age
   console.log(obj)  */

const user={
    name:"Alex"
}

Object.defineProperty(user,"age",{
                                    value:27,
                                    writable:true,
                                    enumerable:true,
                                    configurable:true})

const arr=Object.keys(user)
console.log(arr)


const obj={
    name:"Dinga"
}

const descriptor=Object.getOwnPropertyDescriptor(obj,'name')
console.log(descriptor)

