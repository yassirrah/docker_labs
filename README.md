![CI](https://github.com/yassirrah/docker_labs/actions/workflows/ci.yaml/badge.svg)

# 🐳 Docker Labs — Yassir Rahdouni

Hands-on labs to learn **Docker and DevOps fundamentals** from zero to practical use.  
Each lab includes commands, explanations, troubleshooting notes, and screenshots.

---

## 📚 Labs Progress

| Lab | Title | Status |
|-----|--------|--------|
| 🧩 [Lab 1 — Images & Containers](./lab1_images_containers/notes.md) | Running, inspecting, and managing containers | ✅ Completed |
| 🧱 [Lab 2 — Build Your Own Image (Node.js)](./lab2_dockerFile/notes.md) | Writing Dockerfiles, building and running custom images | ✅ Completed |
| 💾 [Lab 3 — Storage: Volumes & Bind Mounts](./lab3_volumes/notes.md) | Persistent data and development mounts | ✅ Completed |
| 🌐 [Lab 4 — Networking & Service Discovery](./lab4_networks/notes.md) | Container-to-container communication using user-defined networks | ✅ Completed |
| ⚙️ [Lab 5 — Docker Compose](./lab5_dockerCompose/notes.md) | Managing multi-container applications with one YAML file | ✅ Completed |
| 🚀 CI/CD — Build & Publish to Docker Hub | GitHub Actions pipeline | ✅ Working |

---

## ✅ What You’ll Learn
- Container fundamentals: build, run, inspect, and remove  
- Writing efficient **Dockerfiles** (multi-stage builds)  
- **Port mapping** & service exposure  
- **Volumes vs Bind Mounts** for data persistence  
- **Networking & DNS discovery** between containers  
- **Docker Compose** for multi-service stacks  
- **CI/CD automation** with GitHub Actions and Docker Hub publishing  

---

## 🧪 Continuous Integration (CI)
This repository includes a **GitHub Actions pipeline** that:
1. Builds and tests the Lab 2 Node.js image.  
2. Verifies the app responds on port 3000.  
3. Publishes to Docker Hub on push to `main` or tagged releases.

> See [`.github/workflows/ci.yaml`](.github/workflows/ci.yaml)

---

## 📸 Screenshots
Key results and terminal captures are stored in each lab’s  
[`screenshots/`](./lab1_images_containers/screenshots) folders.

---

## 📝 License
MIT — see [LICENSE](./LICENSE).

---

**Author:** Yassir Rahdouni  
📧 [LinkedIn](https://www.linkedin.com/in/yassir-rahdouni-0b6926168/) | 🐙 [GitHub](https://github.com/yassirrah)
