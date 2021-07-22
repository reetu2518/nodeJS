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

// for fetch the data from database
// User.find({}, function(err,users){
//     if(err) console.warn(err);
//     console.warn(users);
// })

// for insert the data into database
const data = new User({
    _id: new mongo.Types.ObjectId,
    name : "peter parker",
    email : "peter@spd.com",
    address : "Spider house"
});

data.save().then((result)=>{
    console.warn(result)
})
.catch(err=>console.warn(err))