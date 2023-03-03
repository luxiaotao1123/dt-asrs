<template>
  <div id="container"></div>
</template>

<script lang='ts' setup>
import { ref, reactive, onMounted } from 'vue'
import Base3D from '../utils/Base3D'
import Player from '../utils/Player'

onMounted(() => {
  // const base3D = new Base3D('#container');
  // base3D.startup();
  const player = new Player('#container');
  player.startup();
})
</script>

<style lang="less" scoped>
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