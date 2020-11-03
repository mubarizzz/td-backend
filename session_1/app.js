const http = require("http");
const url = require("url");



let server = http.createServer(function (req, res) {
    let link = url.parse(req.url, true);

    if(link.pathname == "/") {
        //response header
        res.writeHead(200, {'Content-Type':'text/html'});
        //response content 
        res.write("<html><body><h1>Hello from the server</h1></body></html>")
        console.log(req.url);
        //end the response
        res.end();
    }
    else if(link.pathname == "/newPage") {
        //response header
        res.writeHead(200, {'Content-Type':'application/json'});
        //response content 
        res.write(JSON.stringify({message:'This is a new Page'}));
        console.log(link.pathname);
        //end the response
        res.end();
    }
});

server.listen(8000);
console.log("Running")