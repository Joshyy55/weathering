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
        console.log(data);})
    }