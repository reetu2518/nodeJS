const express = require("express")
const app = express();
app.set('view engine', 'ejs')

// basic routing
app.get("/", function(req,resp){
    resp.sendFile(__dirname+"/test.html");
})
app.get("/login", function(req,resp){
    resp.sendFile(__dirname+"/login.html");
})

// routing with dynamic values
app.get("/profile/:name", function(req,resp){
    resp.render("Profile", {name:req.params.name});
})

app.listen(5000)