console.log("hello world")
var x = document.getElementById("location");
var y = document.getElementById("temperature");
var z = document.getElementById("feelsLike");
var a = document.getElementById("weather");
var lat, long;
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    lat=position.coords.latitude
    long=position.coords.longitude
    const weather = fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=hourly,daily&units=metric&appid=5d3cfaf81943039b5f9905f4a64eee89')
     .then((response) => response.json())
     .then((data) => { return(data)})
     
    const display = async () => {
      let WeatherData = await weather
      let location="location: "+WeatherData.timezone
      let temperature ="temperature: "+ WeatherData.current.temp+"°C"
      let feelsLike ="feelsLike: "+ WeatherData.current.feels_like+"°C"
      // let CurrentWeather = "weather: "+ WeatherData.weather[0].description
  

      x.innerHTML=location
      y.innerHTML=temperature
      z.innerHTML=feelsLike
      // a.innerHTML=CurrentWeather
    }
    display()
    }

getLocation()
