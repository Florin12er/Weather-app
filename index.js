document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector(".enter");
  const City = document.querySelector(".city");
  const check = document.querySelector(".switch-input");

  function getWheather() {
    const city = City.value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=37f87319a9d14a5d96d75322230211&q=${city}&aqi=yes`;

    fetch(apiUrl, { mode: "cors" })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          alert("this city doesn't exist ");
        }
      })
      .then(function (response) {
        console.log(response);

        const conditionImage = document.querySelector(".condition-image");
        const country = document.querySelector(".country");
        country.innerHTML =
          response.location.country + " ," + response.location.name;
        const fahrenheit = document.querySelector(".fahrenheit");
        fahrenheit.innerHTML = response.current.temp_f + " °Fahrenheit";
        const condition = document.querySelector(".condition");
        condition.innerHTML = response.current.condition.text;
        const windSpeed = document.querySelector(".wind-speed");
        const cloudyImage = response.current.condition.icon;
        windSpeed.innerHTML =
          "Wind Speed: " + response.current.wind_mph + " mph";
        const switchText = document.querySelector(".switch-text");
        if (condition.innerHTML === "Sunny") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/113.png";
        }
        if (condition.innerHTML === "Partly cloudy") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/116.png";
          if (
            cloudyImage.includes(
              "//cdn.weatherapi.com/weather/64x64/night/116.png",
            )
          );
          {
            conditionImage.src =
              "https://cdn.weatherapi.com/weather/64x64/night/116.png";
          }
        }
        if (condition.innerHTML === "Clear") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/113.png";
        }
        if (condition.innerHTML === "Overcast") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/122.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/119.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/119.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/119.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/119.png";
        }
        if (condition.innerHTML === "Mist") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/143.png";
        }
        if (condition.innerHTML === "Light rain") {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/296.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/299.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/299.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/299.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/299.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/293.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/293.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/293.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/293.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/263.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/263.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/263.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/263.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/266.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/266.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/266.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/266.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/302.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/302.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/302.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/302.png";
        }

        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/305.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/305.png";
        }
        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/305.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/305.png";
        }
        if (
          cloudyImage.includes("//cdn.weatherapi.com/weather/64x64/day/308.png")
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/day/308.png";
        }

        if (
          cloudyImage.includes(
            "//cdn.weatherapi.com/weather/64x64/night/308.png",
          )
        ) {
          conditionImage.src =
            "https://cdn.weatherapi.com/weather/64x64/night/308.png";
        }

        check.addEventListener("change", () => {
          if (check.checked) {
            fahrenheit.innerHTML = response.current.temp_c + " °Celsius";
            switchText.innerHTML = "Change to °Fahrenheit";
          } else {
            fahrenheit.innerHTML = response.current.temp_f + " °Fahrenheit";
            switchText.innerHTML = "Change to °Celsius";
          }
        });
        fahrenheit.innerHTML = response.current.temp_f + " °Fahrenheit";
        switchText.innerHTML = "Change to °Celsius";
      });
  }

  enterButton.addEventListener("click", () => {
    getWheather();
  });
  City.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      getWheather();
    }
  });
});
