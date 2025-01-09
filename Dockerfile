# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install

# Copy the source code and build the app
COPY ./client ./
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build folder from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]

