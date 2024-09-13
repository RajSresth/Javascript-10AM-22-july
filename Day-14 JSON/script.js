const obj={
    name:"Chombu",
    age:21,
    city:"Noida",
    state:"UP",
    isWorking:true,
    pin:201301
}

const json_Obj=JSON.stringify(obj)
// console.log(json_Obj, typeof(json_Obj))

const normal_Obj=JSON.parse(json_Obj)
console.log(normal_Obj)








