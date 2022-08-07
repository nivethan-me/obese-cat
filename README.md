# An opinionated CREATE REACT APP with typescript redux toolkit & tailwind
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)
<br>

## Why
I have created several React apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. Feel free to tweak it or even maintains your own forks.

## Inspirations
colocation by kent

## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript, of course
- 🦾 eslint
- 🫀 [Jest](https://jestjs.io/) - unitary testing made easy
- 🎨 [Tailwind with JIT](https://tailwindcss.com/) - next generation utility-first CSS
- 🪢 [CSS Modules](https://github.com/css-modules/css-modules)
- 👑 [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 😃 [Hero icons](https://heroicons.com/)
- ☁️ Deploy on Netlify, zero-config

## Directory Structure

`├──`[`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──`[`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──`[`app`](./app) — Web application front-end built with [React](https://reactjs.org/) and [Material UI](https://mui.com/core/)<br>
`├──`[`edge`](./edge) — Cloudflare Workers (CDN) edge endpoint<br>
`├──`[`env`](./env) — Application settings, API keys, etc.<br>
`├──`[`scripts`](./scripts) — Automation scripts such as `yarn deploy`<br>
`├──`[`tsconfig.base.json`](./tsconfig.base.json) — The common/shared TypeScript configuration<br>
`└──`[`tsconfig.json`](./tsconfig.json) — The root TypeScript configuration<br>

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-Main
+ │ └─┬ preload
+ │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```
## Getting Started

[Generate](https://github.com/kriasoft/react-starter-kit/generate) a new project
from this template, clone it, install project dependencies, update the
environment variables found in [`env/*.env`](./env/), and start hacking:

```
$ git clone https://github.com/kriasoft/react-starter-kit.git example
$ cd ./example
$ yarn install
$ yarn start
```

## Scripts

- `yarn start` — Launches the app in development mode on [`http://localhost:5173`](http://localhost:5173/)
- `yarn build` — Compiles and bundles the app for deployment
- `yarn lint` — Validate the code using ESLint
- `yarn tsc` — Validate the code using TypeScript compiler
- `yarn test` — Run unit tests with Jest, Supertest
- `yarn edge deploy` — Deploys the app to Cloudflare