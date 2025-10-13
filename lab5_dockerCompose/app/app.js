const http = require('http');
const { createClient } = require('redis');

const client = createClient({ url: `redis://${process.env.REDIS_HOST}:6379` });
client.on('error', (err) => console.log('Redis error:', err));

(async () => {
  await client.connect();
  http.createServer(async (_req, res) => {
    const pong = await client.ping();
    res.end(`Redis says: ${pong}\n`);
  }).listen(3000, '0.0.0.0', () => console.log('Listening on port 3000'));
})();