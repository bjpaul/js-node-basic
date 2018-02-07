const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;

const fileLocationFinder = function(filename){
   return "static/"+filename+".htm";
}
const handler = function(req, res){
    var URL = req.url;
    // console.log(URL);
    var q = url.parse(URL, true);
    // console.log(q);
    var filename =  q.pathname;
    var fileLocation = fileLocationFinder(filename)
    fs.readFile(fileLocation, function(err, data) {
      res.setHeader('Content-Type', 'text/html');
        if (err) {
            res.statusCode = 404;
            return res.end("404 Not Found");
        }else{
            res.statusCode = 200;
            res.write(data);
            return res.end();
        }
    });
}

const init = function() {
    console.log(`Server running at http://127.0.0.1:${port}/`);
}

const server = http.createServer(handler);
server.listen(port, init);
