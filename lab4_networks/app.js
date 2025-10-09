const http = require('http');
const { execSync } = require('child_process');
const host = '0.0.0.0', port = 3000;

http.createServer((req, res) => {
  try {
    const pong = execSync('redis-cli -h cache PING').toString().trim();
    res.end('Redis says: ' + pong + '\n');
  } catch {
    res.statusCode = 500;
    res.end('Cannot reach Redis\n');
  }
}).listen(port, host, () => console.log(`Listening on ${host}:${port}`));
