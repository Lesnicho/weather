//  fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6e2995a96533b594ae4aee19b7723f8d')
//      .then((result) => {
//          return result.json()

//      })
//      .then((result) => {
//          console.log(result)
//      })

let p = document.querySelector('.p')
let img = document.querySelector('.img')

let input = document.querySelector('.in1')
let button = document.querySelector('.btn')


async function getWeather(){
    
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6e2995a96533b594ae4aee19b7723f8d`)
    const result = await info.json()
    
    console.log(result)
    console.log(result.main.temp)
    
    const temp = result.main.temp - 273

    console.log(temp.toFixed(1))
  //p.innerHTML = 'Погода на улице ' + temp.toFixed(1) 
    
    p.innerHTML = `Погода в ${input.value} : ${temp.toFixed(1)}`;
    
  //p.innerHTML = `Now the weather is outside ${temp.toFixed(1)}`

    const icon = result.weather[0].icon
    console.log(icon) 
  
  //img.src = 'http://openweathermap.org/img/wn/'+icon+'@2x.png'
    
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
}
button.onclick = () => getWeather();
