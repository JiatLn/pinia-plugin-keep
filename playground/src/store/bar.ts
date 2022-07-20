import { shuffle } from 'lodash-es'
import { defineStore } from 'pinia'

export const useBar = defineStore({
  id: 'bar',
  state: () => {
    return {
      aNum: 0,
      aMap: new Map(),
      aSet: new Set(),
      aArr: [1, 2, 3, 4, 5],
    }
  },
  actions: {
    login() {
      this.aMap.set('date', new Date())
      this.aMap.set('username', 'cx33')
    },
    shuffleArr() {
      this.aArr = shuffle(this.aArr)
    },
  },
})
