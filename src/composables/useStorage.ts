import { jsonToStrMap, strMapToJson } from '../utils'

export function useStorage(storageType: 'local' | 'session') {
  const setItem = <T extends Record<string, any>>(key: string, val: T) => {
    const obj = Object.create(null)
    for (const [k, v] of Object.entries(val)) {
      if (v instanceof Map)
        obj[`__MAP__${k}`] = strMapToJson(v)
      else if (v instanceof Set)
        obj[`__SET__${k}`] = Array.from(v)
      else
        obj[k] = v
    }
    switch (storageType) {
      case 'local': {
        localStorage.setItem(key, JSON.stringify(obj))
        break
      }
      case 'session': {
        sessionStorage.setItem(key, JSON.stringify(obj))
        break
      }
    }
  }
  const getItem = <T>(key: string, defaultVal?: T) => {
    let vl
    switch (storageType) {
      case 'local': {
        vl = localStorage.getItem(key)
        break
      }
      case 'session': {
        vl = sessionStorage.getItem(key)
        break
      }
    }

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
        else if (k.startsWith('__SET__')) {
          const reallyKey = k.replace('__SET__', '')
          pvl[reallyKey] = new Set(v as string[])
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
    switch (storageType) {
      case 'local': {
        localStorage.removeItem(key)
        break
      }
      case 'session': {
        sessionStorage.removeItem(key)
        break
      }
    }
  }

  return {
    delItem,
    getItem,
    setItem,
  }
}
