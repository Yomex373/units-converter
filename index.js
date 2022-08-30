/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const btn = document.getElementById('btn');
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kgToPound = 2.204

btn.addEventListener("click", () => {
    renderLength()
    renderVolume();
    renderMass();
})

function renderLength() {
    let inputValue = inputEl.value
    let feet = inputValue * meterToFeet;
    let meter = inputValue / meterToFeet;
    let result = ""
    result = `${inputEl.value} meters = ${feet.toFixed(3)} feet 
            | ${inputEl.value} feet = ${meter.toFixed(3)} meters`
    lengthEl.textContent = result
}

function renderVolume() {
    let inputValue = inputEl.value
    let gallon = inputValue * literToGallon;
    let liter = inputValue / literToGallon;
    let result = ""
    result = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons 
            | ${inputEl.value} gallons = ${liter.toFixed(3)} meters`
    volumeEl.textContent = result
}

function renderMass() {
    let inputValue = inputEl.value
    let pound = inputValue * kgToPound;
    let kilo = inputValue / kgToPound;
    let result = ""
    result = `${inputEl.value} kilos = ${pound.toFixed(3)} pounds 
            | ${inputEl.value} pounds = ${kilo.toFixed(3)} kilos`
    massEl.textContent = result
}

