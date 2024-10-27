# Module Federation with NextJS and Client Side React.

Module federation in NextJS depends on [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf).

## Context

There are 3 applications:

- `host-app`: Next.js app
- `remote-app`: flavor of `React + Webpack 5`
- `test-app`: Next.js app

All of them come with Material UI and ESLint + Prettier installed

### The `host-app`

- We've configured the `remotes` object inside of the `NextFederationPlugin` in next.config.js file.
- Rendering all the three apps in the main page of this app.

### The `remote-app`

- We've configured the `remotes` object inside of the `NextFederationPlugin` in webpack.config.js file.
- Exposing a `App` component that is loaded in the host app.
- Known issue: ESLint not working in this project

### The `test-app`

- We've configured the `remotes` object inside of the `NextFederationPlugin` in next.config.js file.
- Exposing a `App` component that is loaded in the host app.

## Setup

- run `pnpm i` - Install all the dependencies to run the apps in parallel.
- run `npm run install:apps` - Install all the required dependencies of every app
- run `npm run start:apps` - Start all apps at the same time
- `host-app` on `localhost:3000`
- `remote-app` on `localhost:3001`
- `test-app` on `localhost:3002`
- Navigate to `localhost:3000` - Three Button Component should be visible, one from remote, another from host app and a third from the test app.
