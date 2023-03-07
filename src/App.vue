<template>
  <HelloWorld></HelloWorld>
  <!-- <div style="text-align: center; height: 100px;">
    <router-link to="/login"
      style="height: 100px; width: 100px; display: inline-block; background-color: rosybrown;"></router-link>
    <router-link :to="{ name: 'reg' }"
      style="height: 100px; width: 100px; display: inline-block; background-color: rebeccapurple;"></router-link>
    <a-button type="primary" @click="toPage('/reg')">asdasd</a-button>
    <div ref="cool"></div>
  </div>
  <router-view></router-view> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useTestStore } from './store/index'
import { useRouter } from 'vue-router';
import axios from 'axios'

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
const toPage = (str: string) => {
  router.push({
    path: str
  })
}

// 通过ref获取dom
const cool = ref<any>();
onMounted(() => {
  let dom = cool.value as HTMLElement;
  console.log(dom);
  setTimeout(() => {
    getCrnData().then(result => console.log(result.data))
  })
})

// http请求
const getCrnData = async () => {
  return await axios.get("http://47.97.1.152:58080/jkwcs/three/query/crn/cache/v1", { params: {} })
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
