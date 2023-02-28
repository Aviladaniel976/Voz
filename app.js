const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("encuesta");
});

app.post("/page1", function(req, res){
    res.render("page1");
});

app.post("/page2", function(req, res){
    res.render("page2");
});





app.listen( 3000, function(){
    console.log("Server is ready on port 3000!");
});