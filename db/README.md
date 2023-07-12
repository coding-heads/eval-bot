# Getting started with Prisma DB

## Resources

Official Docs: https://www.prisma.io/docs/getting-started/quickstart

## Install & Setup

Prerequisites:

- MySQL

First, navigate to `/db` and install the package and dependencies with `npm install`

Starting the database will depend on your environment. If you installed mysql via homebrew, you can start it with the command `mysql.server start`.

You can then create the prisma database by running `npx prisma migrate dev --name init`.

Finally, you can seed the database with `npm run seed`.

## Environment 

Copy the contents of `.env.template` to a new file named `.env` and paste the appropriate token.

Example: `DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"`. Be sure to paste in existing string quotes.

## Migrations

If changes are made to the schema, migrate with `npx prisma migrate dev --name NAME`
