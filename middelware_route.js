const express = require("express")
const app = express()
const router = express.Router();

const checkURL = require("./middelware")

app.get('/',function(req,res){
  res.send("home page")
})

// only selected URL checked middelware
router.get('/login',checkURL, function(req,res){
    res.send("login page")
})
app.get('/about',function(req,res){
    res.send("about page")
})

app.use('/', router)
app.listen(5000)