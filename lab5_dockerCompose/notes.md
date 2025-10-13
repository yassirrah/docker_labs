# 🐳 Lab 5 — Docker Compose: Multi-Service Orchestration

---

## 🎯 Objective
Use **Docker Compose** to define and run multi-container applications from a single YAML file.  
This lab demonstrates how to connect a Node.js app with a Redis service, both running in coordinated containers.

---

## 📘 Key Concepts
| Concept | Description |
|----------|--------------|
| **Service** | A container definition inside `docker-compose.yml` (e.g., `app`, `cache`). |
| **Network** | Automatically created and shared between all services for internal communication. |
| **Volume** | Optional persistent storage that Compose can declare and mount. |
| **depends_on** | Ensures service startup order (e.g., start Redis before the app). |
| **.env file** | Stores environment variables for cleaner configuration. |

---

## 🧱 Directory Structure
lab5_compose/
├─ app/
│ ├─ app.js
│ ├─ package.json
│ └─ Dockerfile
├─ docker-compose.yml
└─ .env


---

## ⚙️ Step 1 – Application Code

**`app/app.js`**
```js
const http = require('http');
const { createClient } = require('redis');

const client = createClient({ url: 'redis://cache:6379' });
client.on('error', (err) => console.log('Redis error:', err));

(async () => {
  await client.connect();
  http.createServer(async (_req, res) => {
    const pong = await client.ping();
    res.end(`Redis says: ${pong}\n`);
  }).listen(3000, '0.0.0.0', () => console.log('Listening on port 3000'));
})();


🧩 Step 2 – Compose File

docker-compose.yml

version: '3.9'

services:
  app:
    build: ./app
    container_name: app
    ports:
      - "3000:3000"
    depends_on:
      - cache
    environment:
      - REDIS_HOST=cache
    networks:
      - app-net

  cache:
    image: redis:7-alpine
    container_name: cache
    networks:
      - app-net

networks:
  app-net:
    driver: bridge



🔐 Step 3 – Environment File

.env

REDIS_HOST=cache
NODE_ENV=production


▶️ Step 4 – Run the Stack
docker compose up --build

Expected logs:

cache  | Ready to accept connections
app    | Listening on port 3000

Test:

curl http://localhost:3000
# → Redis says: PONG


✅ Both services start automatically, share a network, and communicate by name.


🧹 Step 5 – Cleanup
docker compose down          # Stop containers & remove network
docker compose down -v       # Remove volumes as well


💡 Key Takeaways

docker compose up → brings up an entire multi-container app.
Compose auto-creates networks and manages inter-service DNS.
.env files simplify environment variable management.
Ideal for local development, testing, and lightweight CI pipelines.