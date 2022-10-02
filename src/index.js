import "./styles.css";

// just a simple my way of calculating
const btnEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
btnEl.addEventListener("click", function () {
  let basevalue = inputEl.value;
  inputEl.value = "";
  lengthEl.textContent = `${basevalue} meter = ${(
    basevalue * meterToFeet
  ).toFixed(3)} feet`;
  volumeEl.textContent = `${basevalue} liter = ${(
    basevalue * literToGallon
  ).toFixed(3)} gallons`;
  massEl.textContent = `${basevalue} kilogram = ${(
    basevalue * kilogramToPound
  ).toFixed(3)} pound`;
});
// feet to meter basevalue * 0.3048;
// gallon to liter basevalue*  * 3.785411784
// pounds to kilo basevalue *  * 0.453592
