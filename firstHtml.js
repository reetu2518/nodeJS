var http = require("http");
const uc = require("return-uppercase-jagadhissh")
let htmlContent = `
<input type="text"/> <br><br>
<input type="text"/> <br><br>
<input type="text"/> <br><br>
<input type="text"/> <br><br>
`
let h1 = '<h1>upper case package</h1>'
http.createServer(function (req, resp) {
    resp.writeHead(200, {"Content-Type":"text/html"})
    resp.write(uc.return_Uppercase(h1));
    resp.end();
}).listen(5000)