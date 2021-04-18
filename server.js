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

function regexCheck(id, res) {
  console.log("Regex Function Reached");
  return /^[0-9]{1,5}$/.test(id);
}

function inputCheck(id, res) {
    console.log("Input Checker Reached");
  
    if (regexCheck(id, res)) {
      console.log("Regex passed, fizzbuzz case checker started");
      fizzbuzzCaseChecker(id, res);
    } else {
      console.log(
        "Regex Failed :Please enter a positive whole number up to 5 digits"
      );
      res.send(
        "Regex Failed :Please enter a positive whole number up to 5 digits"
      );
    };
  };

function fizzbuzzCaseChecker(id, res) {
  console.log("fizzbuzzCaseChecker Reached");
  switch (true) {
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



// express listener
app.listen(PORT, function () {
  console.log("Listening on " + PORT);
});
