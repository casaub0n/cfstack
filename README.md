<p align="center">
  <a href="https://nextjs.org">
    <h1 align="center">CF Stack</h1>
  </a>
</p>

This repository is the ideal monorepo for next.js

I follow these technical stacks:

- Turborepo
- Prettier
- ESLint
- Jest
- Storybook
- GitHub actions
- Work on Windows

# documents

[storybook](https://casaub0n.github.io/cfstack/)

## Getting Started

pnpm and [Node.js](https://nodejs.org/en/ "Node.js") to build.

```console
$ pnpm install
$ pnpm build
```

environment secrets:

- CLOUDFLARE_ACCOUNT_ID
- CLOUDFLARE_API_TOKEN
- TURBO_TEAM
- TURBO_TOKEN
  in Action sercrets(https://github.com/someone/cfstack/settings/secrets/actions) for your GitHub Actions.

### CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN

https://zenn.dev/nwtgck/articles/1fdee0e84e5808

### TURBO_TEAM and TURBO_TOKEN

https://turborepo.org/docs/ci/github-actions

### local cache to build

```console
$ pnpm turbo login
$ pnpm turbo link
```

# RFC

new site generator

- Deno
- Fresh

## edit diagram

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant cfa as Cloudflare Access
    participant cp as Cloudflare pages
    participant d3
    User->>cfa: Google workplace auth
    cfa->>cp: OK
    cp->>User: View edit page
    User->>cp: send data
    cp->>cp: build static page
    cp->>d3: save data
```

## build process on GitHub

```mermaid
sequenceDiagram
    autonumber
    participant gha as Github actions
    participant d3
    participant cp as Cloudflare pages
    d3->>gha: get data
    gha->>cp: deploy static site
```
