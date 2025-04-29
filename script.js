
    function setWeatherBackground(weatherCondition) {
    const widget = document.querySelector(".widget");
    const textElements = document.querySelectorAll(".det h1, .det h2, .det p, footer h3"); // Select all text elements

    let bgImage = "sunny.jpg"; // Default background
    let textColor= "white";
    if (weatherCondition === "Clear") {
        bgImage = "sunny.jpg";
        textColor = "black";
    } else if (weatherCondition === "Clouds") {
        bgImage = "cloudy.jpg";
        textColor = "black";
    } else if (weatherCondition === "Rain" || weatherCondition === "Drizzle") {
        bgImage = "rainy.jpg";
        textColor = "black";
    } else if (weatherCondition === "Thunderstorm") {
        bgImage = "stormy.jpg";
    } else if (weatherCondition === "Snow") {
        bgImage = "snowy.jpg";
        textColor = "black";
    } else if (weatherCondition === "Mist" || weatherCondition === "Haze" || weatherCondition === "Fog") {
        bgImage = "foggy.jpg";
    }
    widget.style.backgroundImage = `url('${bgImage}')`;

widget.style.backgroundSize = "cover";
widget.style.backgroundPosition = "center";
textElements.forEach(element => {
        element.style.color = textColor;
    });
} 
            const apiKey="646d4864f6f5e6980d99805675627302";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
            const box = document.getElementById("place");
            const btn = document.querySelector(".pos");
            async function checkWeather(place){
            const response = await fetch(apiUrl+place+`&appid=${apiKey}&units=metric`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            document.querySelector(".city").innerHTML = data.name.toUpperCase();
            document.querySelector(".desc").innerHTML = data.weather[0].description.toUpperCase();
            document.getElementById("da").innerHTML = data.wind.speed+" mph";
            document.getElementById("db").innerHTML = data.main.humidity+ " %";
            document.getElementById("dc").innerHTML = data.main.feels_like+" °C";
            document.querySelector(".temp").innerHTML = data.main.temp+"°C";
            setWeatherBackground(data.weather[0].main);
        }
        btn.addEventListener("click", ()=>{
            checkWeather(box.value);
        })
        box.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            checkWeather(box.value);
            }
        });

        checkWeather("Chennai");