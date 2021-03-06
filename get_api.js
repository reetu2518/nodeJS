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

// delete api
app.delete('/user/:id', function(req,res){
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result);
    }).catch(err=>console.warn(err))
})

// update api
app.put('/user/:id',jsonParser, function(req,res){
    User.updateOne(
        {_id:req.params.id},
        {$set:
            {
               name: req.body.name,
               email: req.body.email,
               address: req.body.address,
            }
        }
    ).then((result)=>{
        res.status(202).json(result);
    }).catch(err=>console.warn(err))
});


// search api
app.get('/search/:name', function(req,res){
    var regex = new RegExp(req.params.name, 'i');
    User.find({name:regex}).then((result)=>{
        res.status(203).json(result);
    }).catch(err=>console.warn(err))
});


app.listen(5000)