const http = require('http');
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text-plain; charset=utf-8');
    res.end('Hello docker \n');
}).listen(port, host,() => console.log(`listening on http://${host}:${port}`));