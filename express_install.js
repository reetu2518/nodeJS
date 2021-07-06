const express = require("express")
const app = express();

app.get('/',function(req, resp){
    resp.send("first program with express js!");
}).listen(5000);