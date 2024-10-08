document.addEventListener('DOMContentLoaded' , () => {
    const cityInput = document.getElementById("city-input");
    const wetherBtn = document.getElementById("get-weather-btn");
    const watherDetails = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");


    const API_KEY = "ac60fcf8f5bc6ad7d86e4bf7b90f1fb1"; //env_variables are preferred


    //* onClick of weather data button
    wetherBtn.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (!city) return; // !city === ""
      try {
        const weatherData = await fetchWeather(city);
        displayData(weatherData);//? this function has above function as parameter
      } catch (error) {
        showError();
      }
    });


    //* fetching Data from server
    async function fetchWeather(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url)
      if(!response.ok){
        throw new Error ("City not found")
      }
      const data = response.json()
      return data;
    }

    //* Display the data
    function displayData(sabDetails) {
      const { name, main, weather } = sabDetails;
      cityName.textContent = `City name: ${name}`;
      temperature.textContent = `Temperature :  ${main.temp}`; // main { temp : xyz  }
      description.textContent = ` Weather  : ${weather[0].description}` //weather [ description{"haze"} ]
      
      //unlock the display
      watherDetails.classList.remove("hidden");
      errorMessage.classList.add("hidden");
    }
    function showError() {
      watherDetails.classList.remove("hidden");
      errorMessage.classList.add("hidden");
    }
} )