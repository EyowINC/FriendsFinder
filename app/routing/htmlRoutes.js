var express = require("express") 
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    console.log("hi");
    // res.sendFile(path.join(__dirname, "/public/survey.html"));
  });
  
  
   
  
  app.post("/api/new", function(req, res) {
    
  });