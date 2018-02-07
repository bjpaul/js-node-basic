const http = require('http');
const port = 3000;

const handler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World!');
}

const init = function() {
    console.log(`Server running at http://127.0.0.1:${port}/`);
}

const server = http.createServer(handler);
server.listen(port, init);
