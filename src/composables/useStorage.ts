import { jsonToStrMap, strMapToJson } from '../utils'

export function useStorage() {
  const setItem = <T extends Record<string, any>>(key: string, val: T) => {
    const obj = Object.create(null)
    for (const [k, v] of Object.entries(val)) {
      if (v instanceof Map)
        obj[`__MAP__${k}`] = strMapToJson(v)
      else
        obj[k] = v
    }
    localStorage.setItem(key, JSON.stringify(obj))
  }
  const getItem = <T>(key: string, defaultVal?: T) => {
    const vl = localStorage.getItem(key)
    if (!vl)
      return defaultVal

    try {
      const pvl = JSON.parse(vl)
      for (const [k, v] of Object.entries(pvl)) {
        if (k.startsWith('__MAP__')) {
          const reallyKey = k.replace('__MAP__', '')
          pvl[reallyKey] = jsonToStrMap(v as string)
          delete pvl[k]
        }
      }
      return pvl as T
    }
    catch (e) {
      return defaultVal
    }
  }

  const delItem = (key: string) => {
    localStorage.removeItem(key)
  }

  return {
    delItem,
    getItem,
    setItem,
  }
}
