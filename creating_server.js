var http = require('http');
http.createServer(function (req, resp) {
    resp.write("hello response from node server");
    resp.end();
}).listen(5000)