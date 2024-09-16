const big={
            obj1:{
                    name:"Chombu",
                    age:21
                 },
            obj2:{
                name:"Chombu",
                age:21
            }
           }



function getDetails()
{
    console.log(this)
    const {obj1,obj2}=this;
    console.log(obj1)
    console.log(obj2)
}
getDetails.call(big)