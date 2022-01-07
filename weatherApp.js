console.log("hello world")
var x = document.getElementById("location");
var y = document.getElementById("temperature");
var z = document.getElementById("feelsLike");
var a = document.getElementById("weather");
var i = document.getElementById("icon")
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
      console.log(WeatherData)
      let location=WeatherData.timezone
      let temperature = WeatherData.current.temp+"°C"
      let feelsLike = "Feels Like: "+WeatherData.current.feels_like+"°"
      let CurrentWeather =  WeatherData.current.weather[0].description
      let IconCode = WeatherData.current.weather[0].icon
      var Img = document.createElement("img")
      Img.src = "http://openweathermap.org/img/wn/"+IconCode+"@2x.png"

  

      x.innerHTML=location
      y.innerHTML=temperature
      z.innerHTML=feelsLike
      a.innerHTML=CurrentWeather
      i.appendChild(Img)
    }
    display()
    }

getLocation()
