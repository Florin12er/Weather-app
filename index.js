const enterButton = document.querySelector(".enter");
const City = document.querySelector(".city");
const content = document.querySelector(".content");
const check = document.querySelector(".switch");

const slider = document.createElement("span");
slider.classList.add("slider");
const switc = document.createElement("input");
switc.classList.add("switch");
switc.type = "checkBox";

const country = document.querySelector(".country");
const fahrenheit = document.querySelector(".fahrenheit");
const condition = document.querySelector(".condition");
const windSpeed = document.querySelector(".wind-speed");
const conditionImage = document.querySelector(".condition-image");
/*switc.addEventListener("click", () => {

    if ( temperature == "florin") {

        temperature.innerHTML = andrew

    }if(temperature == "andrew") {

        temperature.innerHTML = florin

    }

})
*/
enterButton.addEventListener("click", () => {
  const city = City.value;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=37f87319a9d14a5d96d75322230211&q=${city}&aqi=yes`;

  fetch(apiUrl, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      conditionImage.src = "https:response.current.condition.icon";
      country.innerHTML =
        response.location.country + " ," + response.location.name;
      fahrenheit.innerHTML = response.current.temp_f + " Fahrenheit";
      condition.innerHTML = response.current.condition.text;
      windSpeed.innerHTML = "Wind Speed: " + response.current.wind_mph + " mph";
    });
});

check.append(switc, slider);
