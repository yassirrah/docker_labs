![CI](https://github.com/yassirrah/docker-labs/actions/workflows/ci.yaml/badge.svg)



# 🐳 Docker Labs — Yassir

Hands-on labs to learn Docker from zero to practical use. Each lab includes
commands, explanations, and screenshots.

## 📚 Labs
- [Lab 1 — Images & Containers](./lab1_images_containers/notes.md)
- [Lab 2 — Build Your Own Image (Node.js)](./lab2_dockerfile/notes.md)
- [Lab 3 — Storage: Volumes vs Bind Mounts](./lab3_storage/notes.md)

## ✅ What you’ll learn
- Running & inspecting containers
- Writing Dockerfiles (multi-stage)
- Port mapping & service exposure
- Volumes vs bind mounts
- Bonus: CI pipeline that builds & tests Lab 2

## 🧪 CI Status
CI builds the Lab 2 image and verifies the container responds on port 3000.

> See `.github/workflows/ci.yaml`.

## 📸 Screenshots
Key results are shown in each lab’s `screenshots/` folder.

## 📝 License
MIT — see [LICENSE](./LICENSE).
