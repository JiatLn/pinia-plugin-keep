<script setup lang="ts">
import { storeToRefs } from 'pinia'
import PiniaLogo from './components/PiniaLogo.vue'
import { useBar } from './store'

const store = useBar()
const { aSet, aNum } = storeToRefs(store)
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
    <PiniaLogo style="height: 100px;" />
    <h2>🍍 Pinia-Plugin-Keep</h2>
    <div style="display: flex; gap: 10px;">
      <button @click="aNum++">
        increase
      </button>
      <button @click="aSet.add(Math.random())">
        add set
      </button>
      <button @click="store.login()">
        login
      </button>
      <button @click="store.shuffleArr()">
        shuffleArr
      </button>
      <button @click="store.$reset()">
        reset store
      </button>
      <button @click="store.$resetPath('aArr')">
        reset aArr
      </button>
      <button @click="store.$resetPath('aMap')">
        reset aMap
      </button>
    </div>
    <pre>store: {{ store }}</pre>
  </div>
</template>

<style scoped></style>
