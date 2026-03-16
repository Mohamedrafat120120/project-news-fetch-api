export async function newsApi() {
  const data = await fetch(
    "https://gnews.io/api/v4/search?q=example&apikey=c182722ca3c40a01dc7cf27b64cfd033"
  );

  const response = await data.json();

  console.log(response.articles);
}

