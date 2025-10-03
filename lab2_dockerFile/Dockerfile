#stage 1 - build/deps

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package.lock.json* ./
RUN npm ci || npm i
COPY . .

#stage 2 - runtime

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app /app
EXPOSE 3000
CMD ["npm", "start"]