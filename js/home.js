// import {currenyApi} from "./currencyService.js"
// // import {weatherApi} from "./weatherService.js"
// import {newsApi} from "./newsService.js"
// import {sportsApi} from "./sportsService.js"
let rates=document.querySelector('.exchange-rates')
let politcs=document.querySelector(".cards")


export async function currenyApi() {
  const data = await fetch(
    "https://v6.exchangerate-api.com/v6/f01bba377b6534832df67446/latest/USD"
  );

  const response = await data.json();

  let rate = "<h3>exchange ratings</h3>";
  let list=Object.entries(response.conversion_rates) 
  let list2=list.slice(0,4)
  for(let i=0;i<=list2.length;i++){ 
    rate += `
      <div class="ratings">
        <h6>${list[i][0]}</h6>
        <h6>${list[i][1]}</h6>
        
      </div>
      <hr />
    `;
  }
    
    

  

  rates.innerHTML = rate;
}


// export async function newsApi(){
//   const data = await fetch(
//     "https://gnews.io/api/v4/search?q=General&apikey=c182722ca3c40a01dc7cf27b64cfd033"
//   );

//   const response = await data.json();
//   let cards=`<div class="politics">
//           <h2>politics</h2>
//           <hr class="line" />
//         </div>`
//   let general=response.articles.slice(0,5)
// for(let i=0;i<general.length;i++){
//           cards+=`
  
//       <div class="cards">
//         <div class="card">
//           <img
//             src="${general[i].image}"
//             alt=""
//             width="90px"
//             height="60px"
//           />
//           <div class="h-p">
//             <h5>${general[i].title}</h5>
//             <p>
//               ${general[i].description}
//             </p>
//           </div>
//         </div>
      
//       </div>
//   `
// }
// politcs.innerHTML=cards;
    
//   }


// export async function weatherApi() {
//   const data = await fetch(
//     "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=7868f1f69ac18221ec5db0dfe2802ec2"
//   );

//   const response = await data.json();

//   console.log(response);
// }

export async function sportsApi() {
  const data = await fetch(
   "https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"

  );

  const response = await data.json();

  console.log(response);
}



// newsApi()
currenyApi();
// weatherApi()
// sportsApi()
// newsApi()