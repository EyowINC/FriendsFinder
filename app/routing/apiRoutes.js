var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friendArray = require("../data/friends.js")

// Sets up the Express App
var app = express();



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.post("/api/new", function(req, res) {
   // step one: write your logic here. use the data which is posted by user.
   // step two: loops for each count
   //

   //grabs the new friend's scores to compare with friends in data arrays.
   var userInput = req.body;
   var userScores = userInput.scores;
   var bestMatch = 0;

   // I need to Write two loops outter/inner.loop goes through userinputs and compares with stored data. The inner Loop goes through each Questions
		for (var i = 0; i < friendArray.length; i++) {
			 var serveydifference 
				
			}

 


    
  });