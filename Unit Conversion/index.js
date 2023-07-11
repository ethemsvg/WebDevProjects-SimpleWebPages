// Temperature Conversion
const temperatureButton = document.getElementById('temperature');
temperatureButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  const celsiusInput = document.getElementById('c');
  const fahrenheitInput = document.getElementById('f');
  
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9/5) + 32;
  
  fahrenheitInput.value = fahrenheit.toFixed(2);
}

// Weight Conversion
const weightButton = document.getElementById('weight');
weightButton.addEventListener('click', convertWeight);

function convertWeight() {
  const kgInput = document.getElementById('kg');
  const poundsInput = document.getElementById('pnd');
  
  const kg = parseFloat(kgInput.value);
  const pounds = kg * 2.205;
  
  poundsInput.value = pounds.toFixed(2);
}

// Distance conversion

const distanceButton = document.getElementById('distance');
distanceButton.addEventListener('click', convertDistance);

function convertDistance(){
    const kmInput = document.getElementById('km');
    const milesInput = document.getElementById('mls');

    const km = parseFloat(kmInput.value);
    const miles = km / 1.609;

    milesInput.value = miles.toFixed(2);
}

// Dark Mode
const darkModeButton = document.getElementById('dark-mode');
darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  
  if (body.classList.contains('dark-mode')) {
    // Turn off dark mode
    body.classList.remove('dark-mode');
  } else {
    // Turn on dark mode
    body.classList.add('dark-mode');
  }
}