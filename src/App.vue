<template>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useTestStore } from './store/index'

const testStore = useTestStore();

// 同步修改
testStore.modifyUrl('http://localhost:8080');
console.log("sync: " + testStore.baseUrl);
// 异步修改
console.log(testStore.getUserInfo());
setTimeout(()=> {
  console.log("async: " + testStore.baseUrl);
}, 2500)


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
