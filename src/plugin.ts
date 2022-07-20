import { get, has, set } from 'lodash-es'
import type { PiniaPluginContext } from 'pinia'
import { useStorage } from './composables/useStorage'

export function keepPiniaPlugin(context: PiniaPluginContext) {
  const { setItem, getItem } = useStorage()
  const { store } = context
  store.$subscribe((_mutation: any, state: any) => {
    setItem(store.$id, { ...state })
  })

  const init = getItem(store.$id) as any
  store.$patch({ ...init })
}

export function resetPluginPinia(context: PiniaPluginContext) {
  const { store, options } = context

  store.$resetPath = (path: string) => {
    if (!store._isOptionsAPI)
      throw new Error(`🍍: Store "${store.$id}" is built using the setup syntax and does not implement $resetPath().`)
    const { state } = options
    const newState = state ? state() : {}
    if (!has(newState, path))
      throw new Error(`🍍: Store "${store.$id}" could not resloved the path of '${path}'.`)
    const resetVal = get(newState, path)
    set(store.$state, path, resetVal)
  }
}
