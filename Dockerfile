# Use the official lightweight Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (3000 in this case)
EXPOSE 3000

# Define the command to run the application
CMD ["node", "index.js"]
