<script setup lang="ts">
import { storeToRefs } from 'pinia'
import PiniaLogo from './components/PiniaLogo.vue'
import { useFoo } from './store/foo'

const store = useFoo()
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
      <button @click="store.resetStore()">
        reset
      </button>
    </div>
    <pre>store: {{ store }}</pre>
  </div>
</template>

<style scoped></style>
