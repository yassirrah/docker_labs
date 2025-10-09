# 🐳 Lab 4 — Networking & Service Discovery

---

## 🎯 Objective
Learn how Docker containers communicate with each other using **networks**, **DNS discovery**, and **aliases**.

---

## 📘 Key Concepts

| Concept                     | Description |
|-----------------------------|--------------|
| **Bridge network**          | The default network for containers on the same host. Internet access works, but no DNS-based discovery. |
| **User-defined bridge**     | Custom network with built-in DNS. Containers can reach each other by **name**. |
| **Alias**                   | An additional name you can give a container on a specific network. |
| **Multiple networks**       | A container can connect to more than one network for cross-service communication. |

---

## 🧩 Part A — Create & Use a User-Defined Network

### 1️⃣ Create a network
docker network create app-net
docker network ls

### 2️⃣ Run Redis on that network
docker run -d --name cache --network app-net redis:7-alpine

### 3️⃣ Verify communication by name
docker run --rm -it --network app-net alpine sh -lc \
  "apk add --no-cache redis-cli >/dev/null; redis-cli -h cache PING"
# Expected: PONG
✅ Result: Containers on the same user-defined network can resolve each other by container name.
![alt text](screenshots/image.png)


### 🧱 Part B — App ↔ Database Communication

## 1️⃣ Create files
lab4-networking/
 ├─ app.js
 ├─ package.json
 └─ Dockerfile

## 2️⃣ Build and run
docker build -t net-demo:1.0 .

![alt text](image.png)

docker run -d --name app --network app-net -p 3000:3000 net-demo:1.0

![alt text](image-1.png)

## 3️⃣ Test
curl http://localhost:3000
# Expected: Redis says: PONG

![alt text](image-2.png)

✅ Result: The Node.js app communicates with Redis through Docker’s internal DNS (by the name cache).


### 🧭 Part C — Aliases & Multi-Network Containers (Bonus)

### Add an alias to Redis
docker network connect --alias redis-cache app-net cache


### Now Redis can be reached via cache or redis-cache:

docker run --rm --network app-net alpine sh -lc \
  "apk add --no-cache redis-cli >/dev/null; redis-cli -h redis-cache PING"

### Connect the app to multiple networks
docker network create metrics-net
docker network connect metrics-net app
docker inspect app | grep -A3 -n '"Networks"'

### or you can use the command 
docker inspect app --format '{{json .NetworkSettings.Networks}}' | jq

![alt text](image.png)


✅ Result: Containers can belong to multiple networks and have multiple DNS identities.

### 🔍 Inspect & Troubleshoot
docker network inspect app-net | less
docker exec -it app sh -lc "getent hosts cache"