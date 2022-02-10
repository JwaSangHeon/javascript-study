const API_KEY = '8ad4d630486587f1c72c1e76a737c722';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        const temp = parseInt(data.main.temp);
        weather.innerText = `${data.weather[0].main} / ${temp}°c`;
    });


}

function onGeoError(){
    console.log(`Can't find you. No weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);