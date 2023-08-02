class Cube {
  constructor(_sideA) {
    this.sideA = _sideA;
  }

  cubeArea = function () {
    let result = this.sideA * this.sideA * 6;
    cubeDiv.innerHTML += `Cube area with side lenght of ${this.sideA} is ${result}`;
  };
  cubePerimeter = function () {
    let result = this.sideA * 12;
    cubeDiv.innerHTML += ` <br/>Cube perimeter with side lenght of ${this.sideA} is ${result}`;
  };
}

let calc = document.querySelector("#calc");
let cubeDiv = document.querySelector("#cube");

calc.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("#calcInput").value;
  let newCube = new Cube(input);
  newCube.cubeArea();
  newCube.cubePerimeter();
});
