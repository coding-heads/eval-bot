# Getting started with Piston

## Resources

Repo: https://github.com/engineer-man/piston
Discord: https://discord.gg/engineerman

## Installation

Prerequisites:

- Docker
- Docker Compose
- Node JS

First, navigate into the piston cli directory and install the node dependencies

```sh
cd piston/cli && npm i && cd ..
```

Next, you can start the API container.

```sh
docker-compose up -d api
```

You can verify this is running correctly with cURL

```sh
curl 0.0.0.0:2000
```

Now that the API is up and running, you can use the provided CLI tool to install runtimes. For example:

```sh
cli/index.js ppman install node
```

You can verify runtime installations with the following command:

```sh
cli/index.js ppman list
```

