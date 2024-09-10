/* const obj={
    name:"Alex",
    age:21,
    userInfo:function(){
        return `user name is ${this.name} and age ${this.age}`
    }
}

 const props=Object.keys(obj)
 console.log(props);
const vals=Object.values(obj)

for(value of vals)
{
    console.log(value)
}
*/
/*
const obj={
    age:64
}

const vals=Object.values(obj);
vals.map(val=>{
    if(val>=18 && val<=60)
    {
        console.log("Eligible to work..!!")
    }
    else if(val>60)
    {
        console.error("Senior Citizen")
    }
    else{
        console.warn("Under age")
    }
}) */


/* Object.entries(obj_ref)

const obj={
    name:"Oggy",
    channel:"CN"
}
const array=Object.entries(obj)
console.log(array)

const newObj=Object.fromEntries(array)
console.log(newObj) */

/*
const obj1={
        name:"Jack",
        info:function(){console.log(this.name)}
}

const arr=Object.entries(obj1)
console.log(arr)

const obj2=Object.fromEntries(arr)
console.log(obj2) */

/*
const user={
    name:"chombu"
}

const info={
    age:24
}

const address={
    city:"Noida",
    state:"UP",
    age:27
}

const res=Object.assign({},user,address,info)
console.log(res) */

/* Object.freeze()

const obj={
    name:"Minku",
    age:21
}

Object.freeze(obj)
obj.age=24;  //No Updation
delete obj.age  //No Deletion
obj.city="Rohini" //No Insertion

console.log(obj) */

/* isFrozen(obj_ref) */
const obj={
    name:"Tom",
    channel:"CN"
}
console.log(Object.isFrozen(obj))

Object.freeze(obj)
console.log(Object.isFrozen(obj))