const express = require("express")
const app = express();
const mongo = require("mongoose");
const User = require("./users");

mongo.connect("mongodb+srv://mongo_user:0W5JrhO8PEzmWRNg@cluster0.ptwwm.mongodb.net/node_mongo?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
);

User.find({}, function(err,users){
    if(err) console.warn(err);
    console.warn(users);
})