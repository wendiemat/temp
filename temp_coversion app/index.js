// get time and date
function time(hour, minute) {
  let currentDate = document.querySelector(".date");
  let currentTime = document.querySelector(".current-day");
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes().toLocaleString();

  if (hours < 12) {
    currentDate.innerHTML = `${date}/${month + 1}/${year}`;
    currentTime.innerHTML = `${day}, ${hours}:${minutes} AM`;
  } else {
    currentDate.innerHTML = `${date}/${month + 1}/${year}`;
    currentTime.innerHTML = `${day}, ${hours}:${minutes} PM`;
  }
}

// update city name to user input in search bar
let formInput = document.querySelector("#form-input");

function search(event) {
  // get converted temp according to user input
  let tempInput = `${formInput.value}`;

  function dispConvertedTemp(response) {
    let currentTemp = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temp-degree");
    temperatureElement.innerHTML = `${currentTemp}°C `;

    // metric conversion functions
    function celsiusToFahrenheit(celsius) {
      event.preventDefault();
      const fahrenheit = (currentTemp * 9) / 5 + 32;
      return fahrenheit;
    }

    function celsiusToKelvins(celsius) {
      event.preventDefault();
      const kelvins = currentTemp;
      return kelvins;
    }

    let convertF = document.querySelector("#conversion-form");
    searchForm.addEventListener("convertF", search);

    let convertC = document.querySelector("#conversion-form");
    searchForm.addEventListener("convertC", search);
  }
}

// dropdown menu C and F
// display conversion
