// import {currenyApi} from "./currencyService.js"
// // import {weatherApi} from "./weatherService.js"
// import {newsApi} from "./newsService.js"
// import {sportsApi} from "./sportsService.js"
let rates=document.querySelector('.exchange-rates')


export async function currenyApi() {
  const data = await fetch(
    "https://v6.exchangerate-api.com/v6/f01bba377b6534832df67446/latest/USD"
  );

  const response = await data.json();

  let rate = "";
  let list=[]
list.push(response.conversion_rates)
  for (let i=0;i<list.length;i++ ) {
    
    rate += `
      <div class="ratings">
        <h6>${i}</h6>
        <h6>${response.conversion_rates[i]}</h6>
      </div>
      <hr />
    `;

  }

  rates.innerHTML = rate;
  
}

currenyApi();
// weatherApi()
// sportsApi()
// newsApi()