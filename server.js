var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// This route goes to the Home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// This route goes to the Survey page
app.get("/survey", function(req, res) {
  console.log("hi");
  console.log(path.join(__dirname, "/app/public/survey.html"))
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


  
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  