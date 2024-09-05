const sizeSliderElement = document.getElementById("size_slider");
const speedSliderElement = document.getElementById("speed_slider");

var generateArrayButton = document.getElementById("a_generate");
var arrayContainer = document.getElementById("array_container");
var arraySpeed = document.getElementById("a_speed");

const buttonAlgos = document.querySelectorAll(".algos button");

const arrayElements = [];
const elementDivs = [];
let marginSize;

let arraySize = +sizeSliderElement?.value;

const minSliderValue = sizeSliderElement?.min;
const maxSliderValue = sizeSliderElement?.max;

generateArrayButton.addEventListener("click", generateArray);
sizeSliderElement.addEventListener("input", updateArraySize);

arrayContainer.style = "flex-direction: row";

function generateArray() {
  arrayContainer.innerHTML = "";

  for (let i = 0; i < arraySize; i++) {
    elementDivs[i] = Math.floor(Math.random() * 0.5 * (maxSliderValue - minSliderValue)) + 10;
    elementDivs[i] = document.createElement("div");
    arrayContainer.appendChild(elementDivs[i]);
    marginSize = 0.1;
    elementDivs[i].style = `margin: 0% ${marginSize}%; background-color: blue; width: ${100 / arraySize - 2 * marginSize}%; height: ${
      arrayElements[i]
    }%;`;
  }
}

window.onload = updateArraySize();

// for (let i=0; i<){}

function updateArraySize() {
  arraySize = speedSliderElement.value;
  generateArray();
}
