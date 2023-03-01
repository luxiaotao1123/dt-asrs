<template>
  <HelloWorld></HelloWorld>
  <div style="text-align: center; height: 100px;">
    <router-link to="/login" style="height: 100px; width: 100px; display: inline-block; background-color: rosybrown;"></router-link>
    <router-link :to="{name: 'reg'}" style="height: 100px; width: 100px; display: inline-block; background-color: rebeccapurple;"></router-link>
    <button @click="toPage('/reg')" style="height: 100px;width: 100px;background-color: tomato;"></button>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useTestStore } from './store/index'
import { useRouter } from 'vue-router';

const testStore = useTestStore();

// 同步修改
testStore.modifyUrl('http://localhost:8080');
console.log("sync: " + testStore.baseUrl);
// 异步修改
console.log(testStore.getUserInfo());
setTimeout(() => {
  console.log("async: " + testStore.baseUrl);
}, 1500)
// getter值
console.log("newBaseUrl: " + testStore.newBaseUrl);
console.log("otherVal: " + testStore.otherVal);

// js 控制路由跳转
const router = useRouter();
const toPage = (str:string) => {
  router.push({
    path: str
  })
}


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
