FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.* ./
RUN npm ci

# Build the application
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS release

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy only the built assets from the build stage
COPY --from=build /app/out ./out

# Set the command to run serve
CMD ["serve", "-s", "out", "-l", "3000"]