const mongo = require("mongoose");

mongo.connect("mongodb+srv://mongo_user:0W5JrhO8PEzmWRNg@cluster0.ptwwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/node_mongo",
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
).then(()=>{console.warn("db connected")})