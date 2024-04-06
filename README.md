# Docker Commands Quick Reference

This document provides a quick reference for commonly used Docker commands. Docker is a containerization platform that enables developers to package, deploy, and run applications in isolated environments called containers.

## Installation

Before using Docker commands, ensure that Docker is installed on your system. You can download and install Docker Desktop from the official Docker website: [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Common Docker Commands

### Container Lifecycle Management

1. **docker run**: Create and start a new container from an image.
   - Syntax:
     ```sh
     docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
     ```
   - Example:
     ```sh
     docker run -d --name mycontainer nginx
     ```

2. **docker stop**: Stop a running container.
   - Syntax:
     ```sh
     docker stop [OPTIONS] CONTAINER [CONTAINER...]
     ```
   - Example:
     ```sh
     docker stop mycontainer
     ```

3. **docker start**: Start a stopped container.
   - Syntax:
     ```sh
     docker start [OPTIONS] CONTAINER [CONTAINER...]
     ```
   - Example:
     ```sh
     docker start mycontainer
     ```

4. **docker restart**: Restart a running or stopped container.
   - Syntax:
     ```sh
     docker restart [OPTIONS] CONTAINER [CONTAINER...]
     ```
   - Example:
     ```sh
     docker restart mycontainer
     ```

5. **docker rm**: Remove one or more containers.
   - Syntax:
     ```sh
     docker rm [OPTIONS] CONTAINER [CONTAINER...]
     ```
   - Example:
     ```sh
     docker rm mycontainer
     ```

### Image Management

1. **docker pull**: Pull an image or a repository from a registry.
   - Syntax:
     ```sh
     docker pull [OPTIONS] NAME[:TAG|@DIGEST]
     ```
   - Example:
     ```sh
     docker pull ubuntu
     ```

2. **docker build**: Build an image from a Dockerfile.
   - Syntax:
     ```sh
     docker build [OPTIONS] PATH | URL | -
     ```
   - Example:
     ```sh
     docker build -t myimage .
     ```

3. **docker images**: List all images available locally.
   - Syntax:
     ```sh
     docker images [OPTIONS] [REPOSITORY[:TAG]]
     ```
   - Example:
     ```sh
     docker images
     ```

4. **docker rmi**: Remove one or more images.
   - Syntax:
     ```sh
     docker rmi [OPTIONS] IMAGE [IMAGE...]
     ```
   - Example:
     ```sh
     docker rmi myimage
     ```

### Information and Status

1. **docker ps**: List running containers.
   - Syntax:
     ```sh
     docker ps [OPTIONS]
     ```
   - Example:
     ```sh
     docker ps
     ```

2. **docker ps -a**: List all containers (running and stopped).
   - Syntax:
     ```sh
     docker ps -a [OPTIONS]
     ```
   - Example:
     ```sh
     docker ps -a
     ```

3. **docker logs**: Fetch the logs of a container.
   - Syntax:
     ```sh
     docker logs [OPTIONS] CONTAINER
     ```
   - Example:
     ```sh
     docker logs mycontainer
     ```

4. **docker inspect**: Display detailed information on one or more containers or images.
   - Syntax:
     ```sh
     docker inspect [OPTIONS] NAME|ID [NAME|ID...]
     ```
   - Example:
     ```sh
     docker inspect mycontainer
     ```

### Networking

1. **docker network ls**: List all networks.
   - Syntax:
     ```sh
     docker network ls [OPTIONS]
     ```
   - Example:
     ```sh
     docker network ls
     ```

2. **docker network create**: Create a new network.
   - Syntax:
     ```sh
     docker network create [OPTIONS] NETWORK
     ```
   - Example:
     ```sh
     docker network create mynetwork
     ```

3. **docker network connect**: Connect a container to a network.
   - Syntax:
     ```sh
     docker network connect [OPTIONS] NETWORK CONTAINER
     ```
   - Example:
     ```sh
     docker network connect mynetwork mycontainer
     ```

4. **docker network disconnect**: Disconnect a container from a network.
   - Syntax:
     ```sh
     docker network disconnect [OPTIONS] NETWORK CONTAINER
     ```
   - Example:
     ```sh
     docker network disconnect mynetwork mycontainer
     ```

### Volume Management

1. **docker volume ls**: List all volumes.
   - Syntax:
     ```sh
     docker volume ls [OPTIONS]
     ```
   - Example:
     ```sh
     docker volume ls
     ```

2. **docker volume create**: Create a new volume.
   - Syntax:
     ```sh
     docker volume create [OPTIONS] [VOLUME]
     ```
   - Example:
     ```sh
     docker volume create myvolume
     ```

3. **docker volume rm**: Remove one or more volumes.
   - Syntax:
     ```sh
     docker volume rm [OPTIONS] VOLUME [VOLUME...]
     ```
   - Example:
     ```sh
     docker volume rm myvolume
     ```

## Conclusion

This document covers some of the most commonly used Docker commands for managing containers, images, networks, and volumes. For more detailed information and additional options, refer to the Docker documentation or use the `docker --help` command. Happy Dockerizing!
