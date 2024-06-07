var input = document.querySelector(".form-input")
var buton = document.querySelector(".search-button")


buton.addEventListener("click", function sub(event) {
    event.preventDefault();
    var cityName = input.value.trim()
    console.log(cityName)
    getLonAndLat(cityName)
})

function getLonAndLat(city) {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=4587fd4a8c5e5c55568c068a80aaffee")
        .then((response) => response.json())
        .then((data) => {
            var location = data[0];
            var lat = location.lat;
            var lon = location.lon;
            console.log("Latitude:" + lat + ", Longitude:" + lon);
            getForecast(lat, lon);
        })
        .catch((error) => {
            console.error("Error:", error);
        });


};
function getForecast(lat, lon) {
    var api = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=4587fd4a8c5e5c55568c068a80aaffee"
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var nam = data.city.name;
            var todayName = document.querySelector(".todayName")
            todayName.textContent = nam + " Today"
            var moist = data.list[0].main.humidity;
            var hummtoda = document.querySelector(".hummtoda")
            hummtoda.textContent = "Humidity: " + moist
            var windy = data.list[0].wind.speed;
            var woosh = document.querySelector(".woosh")
            woosh.textContent = "Wind: " + windy
            var temp = data.list[0].main.temp
            var crisis = document.querySelector(".crisis")
            crisis.textContent ="Temperature: " + temp
            renderForecast(data.list, data)



        })

}

function renderForecast(weatherList, data){
    console.log("render Forecast: ", weatherList)
    var forecastContainer = document.getElementById("forecast")
    forecastContainer.innerHTML = ""
    let dateNumber = 0;
    for (let i = 0; i < weatherList.length; i+=8) {
        console.log("========================start of loop =================")
        const dataPoint = weatherList[i];

        console.log(dataPoint)
        forecastContainer.innerHTML += `<div class ="forecast-card">
        <h1>${data.city.name} ${data.list[dateNumber].dt_txt}</h1></div>
        <h1>Temperature: ${dataPoint.main.temp}</h1></div>
        <h1>Humidity: ${dataPoint.main.humidity}</h1></div>
        <h1>Wind: ${dataPoint.wind.speed}</h1></div>`;

        dateNumber += 8;
    }
}
//rendering a dynamic section
// Where am I writing it? -> Where in my hTML it's gonna go -> you want to give your element an ID
// Remove what's there -> .innerHTML = ""
// Create and append

// Array - List of multiple things [element,element,element]
var people = ["alex", true, 5]


//String - "" or '' or ``
var firstName = "Alex"
var lastName = `Gonzalez`


// Boolean - true or false
var isOverage = true
var isPassing = true

// Number
var age = 26
var percent = 77.77

// Object - {key: value, kaye2:value2}

function logValue (anything){
    console.log("Logging anything: ", anything)

}


logValue("Alex")
logValue(["Alex"])
logValue(true)