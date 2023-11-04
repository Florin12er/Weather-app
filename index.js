const enterButton = document.querySelector(".enter")
const city = document.querySelector(".city")
const content = document.querySelector(".content")
const check = document.querySelector(".switch")


//switch button example
const andrew = "florin"
const florin = "andrew"
let temperature = "fahrenheit"

const slider = document.createElement("span")
slider.classList.add("slider")

const switc = document.createElement("input")
switc.classList.add("switch");
switc.type = "checkBox"

const switchText = document.createElement("div")
switchText.classList.add("switch-text")
switchText.innerHTML = "switch to turn to °Celsius";
/*switc.addEventListener("click", () => {

    if ( temperature == "florin") {

        temperature.innerHTML = andrew

    }if(temperature == "andrew") {

        temperature.innerHTML = florin

    }

})
*/
check.append(switc, slider, switchText)

