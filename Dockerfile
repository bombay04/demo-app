# ===== Stage 1: Build =====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js .

# ===== Stage 2: Production =====
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/server.js .

EXPOSE 3000

CMD ["node", "server.js"]
