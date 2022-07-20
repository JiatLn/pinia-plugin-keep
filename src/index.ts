import 'pinia'

export { keepPiniaPlugin, resetPluginPinia } from './plugin'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    /**
     * Resets the store to its initial state with a nested value pass the keypath as the argument.
     * [warn]: this fn now is options api only
     */
    $resetPath: (path: string) => void
  }
}
