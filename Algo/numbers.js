// check if a number is a prime number
function ifPrimeNumber(number) {
  if (number < 1) {
    return `${number} is not valid`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
}

console.log(ifPrimeNumber(-333));

//check the largest number in an array
const marks = [
  29.4, 26.8, 26.4, 24.4, 27, 28, 31.2, 26.4, 26.4, 23.2, 24.6, 26.4, 13, 28.4,
  23.6, 13, 11, 27, 0, 26.6, 25.4, 30.4, 11.2, 22.4, 26.2, 19.8, 22.4, 28.6,
  26.2, 29.2, 0, 30, 29, 25.4, 29, 11, 22.4, 8.8, 26.2, 26.2, 27, 26.4, 14.4,
  15.2, 27.2, 0, 23.2, 29.2, 26.2, 21, 26.4, 15, 30.2, 26.2, 14.4, 26.4, 24.4,
  28.4, 29.4, 28.4, 16, 26.4, 11, 32.4, 6, 7, 28.2, 18.8, 29.4, 21.4, 29.2, 21,
  21.4, 33.8, 26.8, 13.2, 7.2,
];

// Math methods
console.log(Math.max(...marks));

console.log(Math.round(1.9));

console.log(Math.floor(1.9));

console.log(Math.ceil(1.01));
