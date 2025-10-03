# 🐳 Lab 1 – Images & Containers

## 🎯 Objective
Learn the basics of working with Docker images and containers:
- Pulling images from Docker Hub
- Running containers
- Mapping ports to the host
- Inspecting logs and processes
- Stopping and removing containers/images

---

## 📥 Step 1 – Pull an Image
docker pull nginx:alpine
![alt text](image.png)

## Step 2 – Run a Container
docker run -d --name web -p 8080:80 nginx:alpine
![alt text](image-1.png)`

-d → detached mode (runs in background)

--name web → assigns container name web

-p 8080:80 → maps host port 8080 to container port 80

nginx:alpine → image to run

➡ Test: http://localhost:8080

## 🔎 Step 3 – Inspect and Interact
docker ps                  # list running containers
docker logs web            # view logs of container
docker exec -it web sh     # open interactive shell
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)

## 🛑 Step 4 – Stop and Remove
docker stop web
docker rm web
![alt text](image-5.png)

## 🧹 Step 5 – Remove Image
docker rmi nginx:alpine


✅ Key Takeaways

Image = blueprint (read-only).

Container = running instance of an image.

Lifecycle: pull → run → inspect → exec → stop → remove.

-p host:container publishes a container port to the host.

Containers are ephemeral → by default, data does not persist after removal.