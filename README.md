# pinia-plugin-keep

[![NPM version](https://img.shields.io/npm/v/pinia-plugin-keep?color=a1b858&label=)](https://www.npmjs.com/package/pinia-plugin-keep)

🍍🍍 Not only a pinia plugin.

## Install

```bash
npm i pinia-plugin-keep
```
## Usage

- main.ts

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// ↓ import the plugin
import { keepPiniaPlugin, resetPluginPinia } from 'pinia-plugin-keep' 

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(keepPiniaPlugin) // <- use the plugin
pinia.use(resetPluginPinia) // <- use the plugin

app.use(pinia)

app.mount('#app')
```

## Description

- keepPiniaPlugin

> Persistence your state to localStorage.

You only need to install the keepPiniaPlugin in `main.ts`, like the  above `Usage`. And the plugin will keep your state in the localStorage when you use the store.

The default config is persistence the state to localStorage. You could change the config in the `keepPiniaPlugin` function, like the following:

```typescript
pinia.use(_ => keepPiniaPlugin(_, 'session'))
```

So, the state will be kept in the sessionStorage.

- resetPluginPinia

> Resets the store to its initial state with a nested value pass the keypath as the argument.

When you install this plugin, your store will register a function call `$resetPath`, and you could use it to reset the value with state initial.

**TIPS: `$resetPath` is options api only**

For example:

- userStore.ts

```ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo: {
        age: 18,
        name: 'cx33'
      }
    }
  },
  // getters
  // ...
  // actions
  // ...
})
```
- anywhere
```ts
import useUserStore from './userStore'

const store = useUserStore()

store.$resetPath('userInfo.age') // <- here is equal to store.$state.userInfo.age = 18
```


## License

[MIT](./LICENSE) License © 2022 [JiatLn](https://github.com/jiatln)
