var http = require("http");
let data = [
    {name:'reetu', age:20, number:23456},
    {name:'y432', age:22, number:2346},
    {name:'u76trfv', age:90, number:8765},
    {name:'3r32r', age:80, number:9876543},
    {name:'wr3r', age:50, number:5432},
    {name:'r32r', age:60, number:1234567},
]

http.createServer(function(req,resp) {
    resp.writeHead(200,{'Content-Type':'application\json'})
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)