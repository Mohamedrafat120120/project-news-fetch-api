
export async function currenyApi() {
  const data = await fetch(
    "https://v6.exchangerate-api.com/v6/f01bba377b6534832df67446/latest/USD"
  );

  const response = await data.json();

  console.log(response.conversion_rates);
}

