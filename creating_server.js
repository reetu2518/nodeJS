var http = require('http');
let data = "hello response from node server by using nodemon, By using this we don't need to start node server manually. After installing this server will be automatic start!";

http.createServer(function (req, resp) {
    // resp.write("hello response from node server");
    resp.write(data);
    resp.end();
}).listen(5000)