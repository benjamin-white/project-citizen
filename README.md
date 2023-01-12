# **Project Citizen**

## **_Code Style_**

ESLint and Prettier are used to enforce stylistic convention.

## **_Project Structure_**

Broadly there are three main parts to the repo; being admin, site and components. These workspaces are managed by [Turborepo](https://turbo.build/).

## **_Structure &amp; Architecture_**

**Backend:**  
~~Workspace is `/api`~~  
Currently the backend uses [nhost](https://nhost.io/) to easily provision a PostgreSQL database, GraphQL API ([Hasura](https://hasura.io/)) and authentication. This may be replaced later by an `/api` workspace using [NestJS](https://nestjs.com/) (or something different with [Lighthouse](https://lighthouse-php.com/) or [Ariadne](https://ariadnegraphql.org/)) for finer grained control.

**Admin interface:**  
Workspace is `/admin`  
Admin dashboard to be built using [Refine](https://refine.dev)

**User facing site:**  
Workspace is `/site`  
Public facing site to be built using [next](https://nextjs.org/)

**Project components library:**  
Workspace is `/to-decide`

## **_Initial setup_**

This project uses [pnpm](https://pnpm.io/) for dependencies and workspaces.
If you don't have pnpm and assuming you are using node@>16.17 the easiest way to get it is with corepack:

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

Install dependencies and run locally with:
```sh
pnpm i && pnpm dev
```