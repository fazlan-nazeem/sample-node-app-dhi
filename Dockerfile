# Use the dev variant of the node image as the base for building the app
# Replace "demonstrationorg" with your own organization name
FROM demonstrationorg/dhi-node:24-alpine3.22-dev AS builder
 
WORKDIR /app
 
COPY package*.json ./

RUN npm install
 
COPY . .

# Use the runtime variant of the node image for the final image
# Replace "demonstrationorg" with your own organization name
FROM demonstrationorg/dhi-node:24-alpine3.22

#copy the built app from the builder stage to the final image, setting ownership to the node user and group
COPY --from=builder --chown=node:node /app /app
 
WORKDIR /app

EXPOSE 3000
 
CMD ["node", "server.js"]

