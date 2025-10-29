# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of your app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "src/index.js"]

