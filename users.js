const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    __id : mongoose.Schema.Types.ObjectId,
    name : String,
    email : String,
    address : String
});

module.exports = mongoose.model('users', userSchema);