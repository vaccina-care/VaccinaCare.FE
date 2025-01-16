# Use an official Node runtime as the parent image
FROM node:20.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files into the docker image
COPY . .

# Build the app
RUN npm run build

# Install a simple http server for serving static content
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000


# Define the command to run your app
CMD ["serve", "-s", "build", "-l", "3000"]

