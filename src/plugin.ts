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
