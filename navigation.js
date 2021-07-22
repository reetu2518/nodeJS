const express = require("express")
const app = express();
const bodyParser = require('body-parser');
var encoder = bodyParser.urlencoded();

// adding middelware for call style file by express
app.use("/assets", express.static("assets"))

app.set('view engine', 'ejs')

// dynamic content
app.get("/", function(req,resp){
    resp.render("Home");
})
app.get("/login", function(req,resp){
    console.log(req.query)
    resp.render("Login");
})
app.post("/login",encoder, function(req,resp){
    console.log(req.body)
    resp.render("Home");
})
app.get("/about", function(req,resp){
    resp.render("About");
})
app.get("/profile/:name", function(req,resp){
    data = {email:"trst@gmail.com", address:"123/2 kanpur", skills:['php', 'node','react', 'python']}
    resp.render("Profile", {name:req.params.name, data:data});
})

app.listen(5000)