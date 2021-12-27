//  fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6e2995a96533b594ae4aee19b7723f8d')
//      .then((result) => {
//          return result.json()

//      })
//      .then((result) => {
//          console.log(result)
//      })

async function getWeather(){
    const info = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6e2995a96533b594ae4aee19b7723f8d')
    const result = await info.json()
    console.log(result)
    console.log(result.main.temp)
    const temp = result.main.temp - 273
    console.log(temp.toFixed(1))
}
getWeather();