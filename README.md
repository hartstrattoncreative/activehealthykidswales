# Active Healthy Kids Wales

### Getting Started

See our [contributing](./CONTRIBUTING.md) guidelines for more detailed information about the Active Healthy Kids Wales project

### What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

## Setup Environment

First, you should ensure you have **git** installed. The second requirement is **node**. It is recommended to install node using **nvm** (Node Version Manager) you can find instructions for installation and setup [here](https://github.com/creationix/nvm#installation).

The project contains a `.nvmrc` file that sets the node version as the **long term stable**, which at the time of writing is [`lts/gallium` (_v16.13.2_)](https://nodejs.org/en/about/releases/).

```bash
# From the project root
nvm use # Sets the node version to what is defined in .nvmrc
```

Alternatively if you use `bash` or `zsh` for your shell environment you can follow [this guide](https://github.com/creationix/nvm#deeper-shell-integration) to automatically read the `.nvmrc` file and change node version.

For our package management we have chosen to use **Yarn**.

## Local Development

In order to run all the applications locally in dev mode you can run one command from the project root

- Create a `.env.local` in `/apps/web`

```bash
# Sanity
# ========================================================
# NEXT_PUBLIC_SANITY_PROJECT_ID=
# NEXT_PUBLIC_SANITY_DATASET=
# SANITY_API_TOKEN=
# SANITY_PREVIEW_SECRET=
# SANITY_STUDIO_REVALIDATE_SECRET=
```

- Create a `.env.development` in `/apps/studio`

```bash
# Switch the sanity studio dataset, useful for development
# ========================================================
# SANITY_STUDIO_API_DATASET=
# SANITY_STUDIO_PREVIEW_SECRET= # NOTE: should match the secret in the web app
# SANITY_STUDIO_PRODUCTION_URL= # NOTE: falls back to localhost
```

### Apps and Packages

- `web`: [Next.js](https://nextjs.org) app powering the AHKW site
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd activehealthykidswales
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd activehealthykidswales
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd activehealthykidswales
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
