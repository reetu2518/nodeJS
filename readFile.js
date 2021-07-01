var http = require("http");
var fs = require("fs");

http.createServer(function(req,resp){
    fs.readFile("test.html",function(error,data){
        resp.writeHead(200,{"Content-Type":"text/HTML"})
        resp.write(data);
        return resp.end();
    })
}).listen(3000)