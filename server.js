var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

// Inputs
var numFizz = 3;
console.log("Fizz number is " + numFizz);

var numBuzz = 5;
console.log("Buzz number is " + numBuzz);

var numFizzBuzz = numFizz * numBuzz;
console.log("Fizzbuzz number is " + numFizzBuzz);

// id rules
// N must be a number
// N must be less than 6 digits

function generalRegex(id, res) {
  if (/^[0-9]*$/.test(id)) {
    if (/^\d{1,5}$/.test(id)) {
      fizzbuzzCaseChecker(id, res);
    } else {
      console.log("Second Regex Failed");
      res.send(
        "Second Regex Failed :Please limit the number to 5 digits"
      );
    }
  } else {
    console.log("First Regex Failed");
    res.send(
      "First Regex Failed :Please enter a positive whole number up to 5 digits"
    );
  }
}

// function regexDigitCheck(id, res) {
//   console.log("Regex Digit Checker Reached");
//   return /^\d{1,5}$/.test(id);
//   // allows numbers up to 5 digits
//   // https://www.regextester.com/104020
//   // 15.5 returns false online
//   // 15.5 returns true in this regex
//     // This should filter out decimals, perhaps periods are a partition in URL?
// };

// function regexStringCheck(id, res) {
//   console.log("Regex String Checker Reached")
//   return /^[0-9]*$/.test(id);
//   // https://www.regextester.com/21
//   // 23 returns true
//   // 4389 returns true
//   // y7ac8 returns false
//   // bar returns false
// };

// function inputCheck(id, res) {
//   console.log("Input Checker Reached");

//   if (regexDigitCheck(id, res)) {
//     console.log("First Regex Passed");
//     if (regexStringCheck(id, res)) {
//       console.log("Second Regex Passed");
//       fizzbuzzCaseChecker(id, res);
//     } else {
//       console.log(
//         "Second Regex Failed: Please enter a positive whole number up to 5 digits"
//       );
//     }
//   } else {
//     console.log(
//       "First Regex Failed :Please enter a positive whole number up to 5 digits"
//     );
//     res.send(
//       "First Regex Failed :Please enter a positive whole number up to 5 digits"
//     );
//   }
// }

function fizzbuzzCaseChecker(id, res) {
  console.log("fizzbuzzCaseChecker Reached");
  switch (true) {
    case id == 0:
      console.log("Not a valid input : Please pick a counting number");
      res.send("Not a valid input : Please pick a counting number");
      break;
    case id % numFizzBuzz == 0:
      console.log("FizzBuzz returned");
      res.send("FizzBuzz");
      break;
    case id % numFizz == 0:
      console.log("Fizz returned");
      res.send("Fizz");
      break;
    case id % numBuzz == 0:
      console.log("Buzz returned");
      res.send("Buzz");
      break;

    default:
      console.log("Argument returned");
      res.send(id.toString());
  }
}

// routes
app.get("/", function (req, res) {
  res.send("Server Up");
});

app.get("/Fizzbuzz", function (req, res) {
  res.send("CandleScience Test Started");
});

app.get("/Fizzbuzz/:id", function (req, res) {
  var id = req.params.id;
  console.log("New Input Detected");
  console.log("__________");
  console.log(id + " is the Input");
  id = parseInt(id);
  generalRegex(id, res);
});

// express listener
app.listen(PORT, function () {
  console.log("Listening on " + PORT);
});
