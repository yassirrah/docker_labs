# 🐳 Lab 2 – Build Your Own Image (Node.js App)

## 🎯 Objective
Learn how to:
- Write a Dockerfile
- Build a custom Docker image
- Run a container from your own image
- Expose a web application outside the container

---

## 🛠️ Step 1 – Build Image
docker build -t hello-docker:1.0.0 .

![alt text](image.png)

## 🚀 Step 2 – Run Container
docker run -d --name hello -p 3000:3000 hello-docker:1.0.0


-p 3000:3000 → host port 3000 → container port 3000

Test with:

curl http://localhost:3000
# Output: Hello Docker 🐳

![alt text](image-1.png)

## 🔎 Step 3 – Inspect Logs
docker logs hello
# Should show: Listening on http://0.0.0.0:3000

![alt text](image-2.png)

## 🛑 Step 4 – Cleanup
docker stop hello
docker rm hello
docker rmi hello-docker:1.0.0

![alt text](image-3.png)


✅ Key Takeaways

A Dockerfile packages your own app into an image.

Multi-stage builds keep final images small.

Use .dockerignore to avoid copying unnecessary files.

Your app must listen on 0.0.0.0 to be accessible outside the container.

Expose app ports with -p host:container.