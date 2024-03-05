function convertTemperature() {
  const tempInput = parseFloat(document.getElementById("temp_input").value);
  const inputUnit = document.getElementById("input_unit").value;
  const outputUnit = document.getElementById("output_unit").value;

  let kelvinTemp;

  if (inputUnit === "cel") {
    // Convert Celsius to Kelvin
    kelvinTemp = tempInput + 273.15;
  } else if (inputUnit === "fah") {
    // Convert Fahrenheit to Kelvin
    kelvinTemp = (tempInput - 32) * (5 / 9) + 273.15;
  }

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `Temperature in Kelvin: ${kelvinTemp.toFixed(2)}`;
}
