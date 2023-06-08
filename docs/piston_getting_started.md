# Getting started with Piston

## Resources

Repo: https://github.com/engineer-man/piston
Discord: https://discord.gg/engineerman

## Description

Piston is a high performance general purpose code execution engine. It excels at running untrusted and possibly malicious code without fear from any harmful effects.

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
curl localhost:2000
```

Now that the API is up and running, you can use the provided CLI tool to install runtimes. For example:

```sh
cli/index.js ppman install node
```
> **Note** Change out `node` with any language from the list command below to install that runtime.

You can verify runtime installations with the following command:

```sh
cli/index.js ppman list
```

## Automated setup

You can start both the discord bot and piston engine by simply running `npm start` from the root of the project.