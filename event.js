// custom event
let events = require("events");
let eventEmitter = new events.EventEmitter();

eventEmitter.on('speak',function(name){
    console.log(name+" is speaking");
});

eventEmitter.emit("speak", "reetu")


//pre defined event
// let fs = require("fs");
// let readFile = fs.createReadStream("test.html")
// readFile.on('open', function (){
//     console.log("file is loaded");
// })