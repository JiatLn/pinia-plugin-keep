<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFoo } from './store/foo'

const store = useFoo()
const { aSet } = storeToRefs(store)
</script>

<template>
  <div style="display: flex; gap: 10px;">
    <button @click="aSet.add(Math.random())">
      add set
    </button>
    <button @click="store.resetStore()">
      reset
    </button>
  </div>
  <pre>store: {{ store }}</pre>
</template>

<style scoped lang="scss"></style>
