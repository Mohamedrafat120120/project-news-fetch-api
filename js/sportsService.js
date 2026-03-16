export async function sportsApi() {
  const data = await fetch(
   "https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=d8465030b91ec02972bf4c9fc213dd0f5e7cf9b665e1f1d3440ee6775b858146"

  );

  const response = await data.json();

  console.log(response);
}
