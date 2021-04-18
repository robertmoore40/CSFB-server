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
  