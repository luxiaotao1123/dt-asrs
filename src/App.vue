<template>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useTestStore } from './store/index'

const testStore = useTestStore();

console.log(testStore.baseUrl)

</script>

<style scoped>
  * {
      margin: 0;
      padding: 0;
  }
  html {
      height: 100%;
  }
  body {
      height: 100%;
  }

</style>
