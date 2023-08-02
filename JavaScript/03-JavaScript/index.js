let buttons = document.querySelectorAll(".btn");
let spaceBtn = document.querySelector(".space-btn");
let textArea = document.querySelector(".text-area");
let backspace = document.querySelector(".backspace-btn");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    let btnValue = el.textContent;
    textArea.innerText += btnValue;
  });
});

spaceBtn.addEventListener("click", () => {
  textArea.innerText += "\u00A0";
});
backspace.addEventListener("click", () => {
  let text = textArea.innerText;
  textArea.innerText = text.slice(0, text.length - 1);
});

let alphabet = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

window.addEventListener("keyup", (event) => {
  let keyUpVal = event.key;
  if (keyUpVal == "Backspace") {
    let text = textArea.innerText;
    textArea.innerText = text.slice(0, text.length - 1);
  }
  if (keyUpVal === " ") {
    textArea.innerText += "\u00A0";
  }
  alphabet.forEach((el) => {
    if (el === keyUpVal) {
      textArea.innerText += keyUpVal.toUpperCase();
    }
  });

  // keyCode ne go koristam oti bilo depricated :D

  // let keyCode = event.keyCode;
  // if (keyCode >= 65 && keyCode <= 90) {
  //   textArea.innerText += keyUpVal.toUpperCase();
  // }
});
