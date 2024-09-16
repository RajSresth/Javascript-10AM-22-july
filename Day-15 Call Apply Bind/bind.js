const obj1={
    name:"Chombu",
    age:21
 }

function getDetails(city,pin)
{
console.log(this)
console.log(this.name)
console.log(this.age)
console.log(city)
console.log(pin)
}
const res=getDetails.bind(obj1,"noida",201301)
res()