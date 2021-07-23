const express = require('express');
const app = express();
const mongo = require('mongoose');
const User = require('./users');
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

mongo.connect("mongodb+srv://mongo_user:0W5JrhO8PEzmWRNg@cluster0.ptwwm.mongodb.net/node_mongo?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
);

// get api
app.get('/users',function(req,res){
    User.find().select('name').then((data)=>{
        // status
        res.status(500).json(data);
    });
})

// post api
app.post('/user',jsonParser, function(req,res){
    const data = new User({
        _id: new mongo.Types.ObjectId,
        name : req.body.name,
        email : req.body.email,
        address : req.body.address
    });
    data.save().then((result)=>{
        res.status(201).json(result);
    })
    .catch(err=>console.warn(err))
})


app.listen(5000)