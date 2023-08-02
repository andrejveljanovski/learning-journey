// let number = 4;

// if (number % 2 === 0) {
//   console.log(`The ${number} is even`);
// } else {
//   console.log(`The ${number} is not even`);
// }

let number = +prompt(`Insert a number to check if it is even or if it is not`);
const bodyElement = document.querySelector(`body`);
if (!(number % 2)) {
  bodyElement.innerHTML = `<h1>The number:${number} is even </h1>`;
} else {
  bodyElement.innerHTML = `<h1>The number:${number} is not even </h1>`;
}
