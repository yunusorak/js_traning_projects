class Weather {
    constructor() {
        this.url = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=4d8fb5b93d4af21d66a2948710284366&q="
    }

    async getCityWeatherInfo(city) {
        const response = await fetch(this.url + city)
        const data = await response.json()

        return data
    }
}