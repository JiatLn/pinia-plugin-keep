# pinia-plugin-keep

[![NPM version](https://img.shields.io/npm/v/pinia-plugin-keep?color=a1b858&label=)](https://www.npmjs.com/package/pinia-plugin-keep)

## Description

🍍 A pinia persistent plugin.

## Install

```bash
npm i pinia-plugin-keep
```
## Usage

- main.ts

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { keepPiniaPlugin } from 'pinia-plugin-keep' // <-- import the plugin

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(keepPiniaPlugin) // <-- use the plugin

app.use(pinia)

app.mount('#app')
```

## License

[MIT](./LICENSE) License © 2022 [JiatLn](https://github.com/jiatln)
