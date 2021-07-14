const express = require("express")
const app = express();

// adding middelware for call style file by express
app.use("/assets", express.static("assets"))

app.set('view engine', 'ejs')

// basic routing
// app.get("/", function(req,resp){
//     resp.sendFile(__dirname+"/test.html");
// })
// app.get("/login", function(req,resp){
//     resp.sendFile(__dirname+"/login.html");
// })

// routing with dynamic values
// app.get("/profile/:name", function(req,resp){
//     resp.render("Profile", {name:req.params.name});
// })

// dynamic content
app.get("/", function(req,resp){
    resp.render("Home");
})
app.get("/login", function(req,resp){
    console.log(req.query)
    resp.render("Login");
})
app.get("/about", function(req,resp){
    resp.render("About");
})
app.get("/profile/:name", function(req,resp){
    data = {email:"trst@gmail.com", address:"123/2 kanpur", skills:['php', 'node','react', 'python']}
    resp.render("Profile", {name:req.params.name, data:data});
})

app.listen(5000)