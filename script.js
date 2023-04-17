const key = `4cdff55a0d7e460e247dddf386171482`;
const src = document.querySelector(".src");
const btn = document.querySelector(".btn");
const weather = document.querySelector(".weather");







const getWeather = async (city) => {
    
   

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    

    weather.innerHTML = `
    <div class="status">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h4>${data.weather[0].main}</h4>
     </div>

    <h4 class="temp">${data.main.temp} <span>&#8451;</span></h4>
    <h4>Feels Like : ${data.main.feels_like}<span>&#8451;</span></h4>
    <p>City : ${data.name} , Country: ${data.sys.country}</p>
       

        `;
}







src.addEventListener("change",(event)=> {
  
    getWeather(src.value);
    event.preventDefault();
})


