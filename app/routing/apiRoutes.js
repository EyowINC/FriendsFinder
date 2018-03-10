// Chetan help me with the this part of the assignment.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendArray = require("../data/friends.js")

// Sets up the Express App
var app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/new", function (req, res) {
  // step one: write your logic here. use the data which is posted by user.


  //grabs the new friend's scores to compare with friends in data arrays.
  var userInput = req.body;
  var userScores = userInput.scores;
  var bestMatch = 0;

  // I need to Write two loops outter/inner.loop goes through userinputs and compares with stored data. The inner Loop goes through each Questions
  for (var i = 0; i < friendsArray.length; i++) {
    // The initial value assign will keep changing base on result from the inner loop comparison
    var surveyDiff = 100;

    //Loop through individual scores in each array. step two: loops for each count
    for (var j = 0; j < userScore.length; j++) {
      // This method math.abs makes numbers absolute
      surveyDiff += (Math.abs(friendsArray[i].scores[j] - userScore[j]));
    }

    if (surveyDiff < totalDifference) {

      totalDifference = surveyDiff;
      bestmatch = friendsArray[i];
    }

  }
});
