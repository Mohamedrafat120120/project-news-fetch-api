export async function weatherApi() {
  const data = await fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=7868f1f69ac18221ec5db0dfe2802ec2"
  );

  const response = await data.json();

  console.log(response);
}
