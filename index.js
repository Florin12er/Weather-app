const enterButton = document.querySelector(".enter");
const city = document.querySelector(".city");
const content = document.querySelector(".content");
const check = document.querySelector(".switch");

//switch button example
const andrew = "florin";
const florin = "andrew";
let temperature = "fahrenheit";

const slider = document.createElement("span");
slider.classList.add("slider");
const switc = document.createElement("input");
switc.classList.add("switch");
switc.type = "checkBox";

const switchText = document.createElement("div");
switchText.classList.add("switch-text");
switchText.innerHTML = "switch to turn to °Celsius";

const temeperature = document.createElement("div");
temeperature.classList.add("temperature");

/*switc.addEventListener("click", () => {

    if ( temperature == "florin") {

        temperature.innerHTML = andrew

    }if(temperature == "andrew") {

        temperature.innerHTML = florin

    }

})
*/

fetch(
  "http://api.weatherapi.com/v1/current.json?key=37f87319a9d14a5d96d75322230211&q=London&aqi=yes",
  { mode: "cors" },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    console.log(response.location.country); //the location for the country
    console.log(response.location.name); // the name of the city you have written
    temeperature.innerHTML = response.current.temp_f + " fahrenheit"; //example of how to display something
    console.log(response.current.temp_f); // the location for the ° fahrenheit
    console.log(response.current.temp_c); //the location for the ° celsius
    console.log(response.current.condition.text); //condition
    console.log(response.current.wind_mph); //wind speed
  });

check.append(switc, slider, switchText, temeperature);
