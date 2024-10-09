const link="https://api.github.com/users";
let cards="";
async function getDetails(url)
{
    const response=await fetch(url);

    const data=await response.json()
    return data;
}

getDetails(link)
.then(result=>{
    result.filter((val,i)=>{
      if(i>15)
      {
            cards=cards+`<div class="card">
            <div class="profile">
                <img src="${val.avatar_url}" alt="">
            </div>
            <h4>User Id: ${val.id}</h4>
            <h5>User Name: ${val.login}</h5>
        </div>`
      }
            
    })
})

const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
    const container=document.querySelector(".card-container");
    container.innerHTML=cards;
})