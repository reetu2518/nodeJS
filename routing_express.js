const express = require("express")
const app = express()

app.get('/',function(req,res){
    res.send("home page")
})
app.get('/about',function(req,res){
    res.send("about page")
})
app.post('/about',function(req,res){
    res.send("about page post")
})
app.put('/about',function(req,res){
    res.send("about page put")
})
app.delete('/about',function(req,res){
    res.send("about page delete")
})
app.post('/test',function(req,res){
    res.send("post page")
})

app.listen(5000)