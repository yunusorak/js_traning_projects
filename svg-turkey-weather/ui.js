class UI {
    constructor() {
        this.weatherInfo = document.querySelector(".weather-info-box")
    }

    addInfoToUI(data) {
        this.weatherInfo.innerHTML = `
         <h5>${data.name} 
        <sup class="country-info">${data.sys.country}</sup>
    </h5>

    <div class="city-temp">
        ${Math.round(data.main.temp)}<sup>°C</sup>
    </div>

    <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg" alt="${data.weather[0].description}" class="city-icon">
        <figcaption class="desc">${data.weather[0].description}</figcaption>
    </figure> 
        `
    }
}