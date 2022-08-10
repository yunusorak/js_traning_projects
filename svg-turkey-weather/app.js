const pathElements = document.querySelectorAll("path");
let i = 1;
let c;

const weather = new Weather()
const ui = new UI()
eventListeners();

function eventListeners() {
    pathElements.forEach((path) => {
        path.addEventListener("click", getInfos);
    })
}

function getInfos(e) {

    if (c === undefined) {
        c = e.target;
    } else {
        c.style.fill = '#98b1ca';
        c = e.target;
    }
    e.target.style.fill = '#0a72c2';

    // api işlemleri ve ekrana yazdırma
    weather.getCityWeatherInfo(e.target.parentElement.id)
        .then(data => ui.addInfoToUI(data))
        .catch(err => console.log(err))

}