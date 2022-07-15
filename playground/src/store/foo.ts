import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFoo = defineStore('foo', () => {
  const aNum = ref<number>(0)
  const aMap = ref<Map<number | string, any>>(new Map())
  const aSet = ref<Set<number | string>>(new Set())

  function resetStore() {
    aNum.value = 0
    aMap.value = new Map()
    aSet.value = new Set()
  }

  function login() {
    aMap.value.set('date', new Date())
    aMap.value.set('username', 'cx33')
  }

  return {
    aNum,
    aMap,
    aSet,
    login,
    resetStore,
  }
})

