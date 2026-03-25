let politcs=document.querySelector(".economy")

export async function sportsApi(){
  const data = await fetch(
    "https://gnews.io/api/v4/search?q=Sports&apikey=c182722ca3c40a01dc7cf27b64cfd033"
  );

  const response = await data.json();
  let cards=`<h2>sports</h2>
  <hr class="line" />`
  let general=response.articles.slice(0,4)
for(let i=0;i<general.length;i++){
          cards+=`
  
      <div class="cards">
        <div class="card">
          <img
            src="${general[i].image}"
            alt=""
            width="90px"
            height="60px"
          />
          <div class="h-p">
            <h5>${general[i].title}</h5>
            <p>
              ${general[i].description.slice(0,20)}
            </p>
          </div>
        </div>
      
      </div>
  `
}
politcs.innerHTML=cards;
    
  }
sportsApi()
