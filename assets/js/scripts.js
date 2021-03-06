document.addEventListener("DOMContentLoaded", function () {
  // FizzBuzz: for loop
  for (let i = 0; i < 101; i++) {
    if (i !== 0 && i % 3 === 0 && i % 5 === 0) {
      console.log(i + ": FizzBuzz");
    } else if (i !== 0 && i % 3 === 0) {
      console.log(i + ": Fizz");
    } else if (i !== 0 && i % 5 === 0) {
      console.log(i + ": Buzz");
    } else {
      console.log(i);
    }
  }
});
