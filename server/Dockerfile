FROM node:22-slim AS build
WORKDIR /app

# Copy root and server package files
COPY package*.json ./
COPY server/package*.json server/

# Install dependencies with workspace support
RUN npm install

# Copy TypeScript and source
COPY server/tsconfig.json server/
COPY server/src server/src

# Build the server
RUN npm run build -w server

# Final stage
FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production

# Copy only production dependencies
COPY server/package*.json ./
RUN npm install --omit=dev

# Copy built files
COPY --from=build /app/server/dist ./dist

EXPOSE 4000
CMD ["node", "dist/index.js"]