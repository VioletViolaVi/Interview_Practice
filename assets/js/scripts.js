// document.addEventListener("DOMContentLoaded", function () {
//   // FizzBuzz: for loop
//   for (let i = 0; i < 101; i++) {
//     if (i !== 0 && i % 3 === 0 && i % 5 === 0) {
//       console.log(i + ": FizzBuzz");
//     } else if (i !== 0 && i % 3 === 0) {
//       console.log(i + ": Fizz");
//     } else if (i !== 0 && i % 5 === 0) {
//       console.log(i + ": Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// });

$("document").ready(function () {
  console.log("hello world");

  $("a").click(function () {
    $("li").toggle();
  });

  $("#clickBtn").click(function () {
    $("p").append("<p>changed this text</p>").html();
  });

  $("#clickBtn").on("click", () => {
    console.log("this was logged on by the btn");
  });









});
