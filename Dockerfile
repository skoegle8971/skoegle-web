# 1. Base image
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# 4. Copy project files
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Final stage to run the app
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Only copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port
EXPOSE 3000

CMD ["npm", "start"]
