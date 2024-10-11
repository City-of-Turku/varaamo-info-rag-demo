FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.* ./
RUN npm cache clean --force && npm ci

# Build the application
COPY . .

ARG NEXT_PUBLIC_CHAT_API=http://localhost:8000/api/chat
ENV NEXT_PUBLIC_CHAT_API=$NEXT_PUBLIC_API_URL

ARG NEXT_PUBLIC_USE_LLAMACLOUD=false
ENV NEXT_PUBLIC_USE_LLAMACLOUD=$NEXT_PUBLIC_API_URL

ARG NEXT_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=$NEXT_PUBLIC_API_URL

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