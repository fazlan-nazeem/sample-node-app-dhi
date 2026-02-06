### Building the Docker Image

To build the Docker image, run the following command from the project root directory:

```bash
docker build -t task-api .
```

You can replace `task-api` with any tag name you prefer.

### Running the Docker Container

Once the image is built, run the container with:

```bash
docker run -d -p 3000:3000 task-api
```