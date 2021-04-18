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
  