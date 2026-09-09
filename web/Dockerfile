FROM node:22-slim AS build
WORKDIR /app

# Copy root and web package files
COPY package*.json ./
COPY web/package*.json web/

# Install dependencies
RUN npm install

# Copy source and build config
COPY web/tsconfig.json web/
COPY web/next.config.js web/ 2>/dev/null || true
COPY web/.eslintrc.json web/ 2>/dev/null || true
COPY web/public web/public 2>/dev/null || true
COPY web/src web/src 2>/dev/null || true
COPY web/app web/app 2>/dev/null || true
COPY web/lib web/lib 2>/dev/null || true
COPY web/components web/components 2>/dev/null || true
COPY web/store web/store 2>/dev/null || true

# Build Next.js app with standalone output
RUN npm run build -w web

# Final stage
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production

# Copy Next.js standalone output
COPY --from=build /app/web/.next/standalone ./
COPY --from=build /app/web/.next/static ./.next/static
COPY --from=build /app/web/public ./public 2>/dev/null || true

EXPOSE 3000
CMD ["node", "server.js"]