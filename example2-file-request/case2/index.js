const http = require('http');
const service = require('./service.js');
const port = 3000;

const handler = function(req, res){
    service.render(req, res)
}

const init = function() {
    console.log(`Server running at http://127.0.0.1:${port}/`);
}

const server = http.createServer(handler);
server.listen(port, init);
