# Task API

A simple REST API for managing tasks built with Node.js and Express.

## Prerequisites

- Docker installed on your system
- (Optional) Node.js >= 14.0.0 and npm >= 6.0.0 for local development

## Docker Instructions

### Building the Docker Image

To build the Docker image, run the following command from the project root directory:

```bash
docker build -t task-api:latest .
```

You can replace `task-api:latest` with any tag name you prefer.

### Running the Docker Container

Once the image is built, run the container with:

```bash
docker run -d -p 3000:3000 --name task-api-container task-api:latest
```

**Options:**
- `-d`: Run in detached mode (background)
- `-p 3000:3000`: Map port 3000 from the container to port 3000 on your host
- `--name task-api-container`: Assign a name to the container

### Accessing the API

Once the container is running, you can access the API at:

```
http://localhost:3000
```

### Managing the Container

**View running containers:**
```bash
docker ps
```

**View container logs:**
```bash
docker logs task-api-container
```

**Stop the container:**
```bash
docker stop task-api-container
```

**Start the container:**
```bash
docker start task-api-container
```

**Remove the container:**
```bash
docker rm task-api-container
```

## Local Development (without Docker)

### Install Dependencies

```bash
npm install
```

### Run the Application

**Production mode:**
```bash
npm start
```

**Development mode (with auto-reload):**
```bash
npm run dev
```

The server will start on port 3000 by default.

## License

MIT
