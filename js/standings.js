export async function standingsApi() {
  const data = await fetch(
    ""
  );

  const response = await data.json();

  console.log(response.articles);
}
