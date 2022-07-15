function strMapToObj(strMap: Map<string, any>) {
  const obj = Object.create(null)
  for (const [k, v] of strMap)
    obj[k] = v
  return obj
}

function strMapToJson(strMap: Map<string, any>) {
  return JSON.stringify(strMapToObj(strMap))
}

function objToStrMap(obj: Record<string, any>) {
  const strMap = new Map()
  for (const k of Object.keys(obj))
    strMap.set(k, obj[k])
  return strMap
}

function jsonToStrMap(jsonStr: string) {
  return objToStrMap(JSON.parse(jsonStr))
}

export {
  strMapToObj,
  strMapToJson,
  objToStrMap,
  jsonToStrMap,
}
