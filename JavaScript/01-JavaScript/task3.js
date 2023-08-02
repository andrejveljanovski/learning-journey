// let num1 = 25;
// let num2 = 55;
// let num3 = 13;

// let smallest = Math.min(num1, num2, num3);
// let biggest = Math.max(num1, num2, num3);

// console.log(smallest);
// console.log(biggest);

alert(
  `Enter three numbers and I will tell you, which of them is the smallest, which is the largest and if they are prime or not`
);

let num1 = +prompt(`Enter your first number`);
let num2 = +prompt(`Enter your second number`);
let num3 = +prompt(`Enter your third number`);

let smallest = Math.min(num1, num2, num3);
let largest = Math.max(num1, num2, num3);

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`Smallest: ${smallest}`);
console.log(`Largest: ${largest}`);

if (isPrime(smallest)) {
  console.log(`The smallest number ${smallest} is prime`);
} else {
  console.log(`The smallest number ${smallest} is not prime`);
}

if (isPrime(largest)) {
  console.log(`The largest number ${largest} is prime`);
} else {
  console.log(`The largest number ${largest} is not prime`);
}
