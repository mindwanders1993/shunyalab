FROM node:22-alpine AS base

# Install PNPM
RUN npm install -g pnpm@11.7.0

WORKDIR /app

# Copy dependency manifests
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy application source
COPY . .

ENV NODE_ENV=production
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
