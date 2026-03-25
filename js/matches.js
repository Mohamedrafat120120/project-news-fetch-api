document.addEventListener("DOMContentLoaded", () => {
 sportsApi()
})

async function sportsApi() {
  const live = document.querySelector(".ratings")
  if (!tbody) {
    console.error("tbody not found")
    return
  }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)

    if (!response.success || !response.result || !response.result.total) {
      console.error("Bad API response", response)
      return
    }

    const rows = response.result.slice(0,)

    let tr = ``
    for (let i = 0; i < rows.length; i++) {
      tr += `
       <div class="team-names">
                     <img
                       src="./images/download (3).jpg"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_home_team}</h4>
                   </div>
                   <h4>${rows[i].event_final_result}</h4>
                   <div class="team-names">
                     <img
                       src="./images/Zamalek_SC_logo.svg.png"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_away_team}</h4>
                   </div>
                 </div>
        
      `
    }

    live.innerHTML = tr
    console.log(rows)
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}

export async function sportshomeApi() {
  const live = document.querySelector(".ratings")
  if (!tbody) {
    console.error("tbody not found")
    return
  }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)

    if (!response.success || !response.result || !response.result.total) {
      console.error("Bad API response", response)
      return
    }

    const rows = response.result.slice(0, 4)

    let tr = ``
    for (let i = 0; i < rows.length; i++) {
      tr += `
       <div class="team-names">
                     <img
                       src="./images/download (3).jpg"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_home_team}</h4>
                   </div>
                   <h4>${rows[i].event_final_result}</h4>
                   <div class="team-names">
                     <img
                       src="./images/Zamalek_SC_logo.svg.png"
                       alt=""
                       width="20px"
                       height="20px"
                     />
                     <h4>${rows[i].event_away_team}</h4>
                   </div>
                 </div>
        
      `
    }

    live.innerHTML = tr
    console.log(rows)
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}
