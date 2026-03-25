document.addEventListener("DOMContentLoaded", () => {
  statesApi()
})

async function statesApi() {
  const tbodyScores = document.querySelector(".tbody-scores")
  if (!tbody) {
    console.error("tbody not found")
    return
  }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?&met=statess&leagueId=207&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)

    if (!response.success || !response.result || !response.result.total) {
      console.error("Bad API response", response)
      return
    }

    const rows = response.result.slice(0, )

    let tr = ""
    for (let i = 0; i < rows.length; i++) {
      tr += `
        <tr>
          <td>${rows[i].team_name}</td>
          <td>${rows[i].player_name}</td>
          <td>${rows[i].player_goals}</td>
          <td>${rows[i].player_assists}</td>
        </tr>
      `
    }

    tbodyScores.innerHTML = tr
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}



document.addEventListener("DOMContentLoaded", () => {
  statesCardsApi()
})

async function statesCardsApi() {
  const tbodyCards = document.querySelector(".tbody-cards")
  if (!tbody) {
    console.error("tbody not found")
    return
  }

  try {
    const data = await fetch(
      "https://apiv2.allsportsapi.com/football/?&met=Players&playerId=103051168&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"
    )

    const response = await data.json()
    console.log(response)

    if (!response.success || !response.result || !response.result.total) {
      console.error("Bad API response", response)
      return
    }

    const rows = response.result.slice(0, )

    let tr = ""
    for (let i = 0; i < rows.length; i++) {
      tr += `
        <tr>
                  <td>${rows[i].team_name}</td>

          <td>${rows[i].player_name}</td>
          <td>${rows[i].player_goals}</td>
          <td>${rows[i].player_assists}</td>
        </tr>
      `
    }

    tbodyCards.innerHTML = tr
  } catch (error) {
    console.error("Fetch failed:", error)
  }
}