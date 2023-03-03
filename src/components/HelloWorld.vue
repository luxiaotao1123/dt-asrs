<template>
  <div id="container"></div>
</template>
​
<script lang='ts' setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

// import { Stats } from 'three/examples/jsm/libs/stats.module'
import { onMounted } from 'vue'

var scene: any;
var renderer: any;
var camera: any;
var dom: any;
var orbitControl: any;
const objects = [];//场景中所有对象的集合
var stats: any;

const start = () => {
  initMain();
  animate();
}

const initMain = () => {
  initScene();
  initCamera();
  initRenderer();
  initBackground();
  initOrbitControl();
  initLight();
  initStats();
  initFloor();
}

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera);
}

const initScene = () => {
  scene = new THREE.Scene();
}

const initCamera = () => {
  if (!camera) {
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50000);
    camera.position.set(-350, 600, 1100);
    camera.lookAt(scene.position);
    //将相机放到场景中
    scene.add(camera);
  } else {
    camera.position.set(-350, 600, 1100);
    camera.lookAt(scene.position);
  }
}

const initRenderer = () => {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true
  });
  // this.renderer.toneMapping = THREE.CineonToneMapping;	// 色调
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // this.renderer.shadowMap.enabled = true;	// 是否开启阴影
  renderer.shadowMap.type = THREE.BasicShadowMap;
  dom = document.getElementById("container");
  dom.appendChild(renderer.domElement);
}

const initOrbitControl = () => {
  orbitControl = new OrbitControls(camera, renderer.domElement);
  orbitControl.enableDamping = true;
  orbitControl.dampingFactor = 0.5;
  // 视角最小距离
  orbitControl.minDistance = 0;
  // 视角最远距离
  orbitControl.maxDistance = 10000;
  // 最大角度
  //this.orbitControl.maxPolarAngle = Math.PI / 2.2;
}

const initBackground = () => {
  scene.background = new THREE.Color(0x333333);
}

const initLight = () => {
  //首先添加个环境光
  let ambient = new THREE.AmbientLight(0xffffff, 1); //AmbientLight,影响整个场景的光源
  ambient.position.set(0, 0, 0);
  addObject(ambient);

  // 阴影聚光灯
  let pointLight = new THREE.SpotLight(0xFFFAFA, 1);
  pointLight.position.set(0, 1500, 2500);
  // pointLight.castShadow = true; 	// 是否开启阴影
  pointLight.shadow.camera.near = 2000;
  pointLight.shadow.camera.far = 10000;
  pointLight.shadow.mapSize.height = 200000;
  pointLight.shadow.mapSize.width = 200000;
  addObject(pointLight);
}

const initStats = () => {
  // stats = new Stats();
  // dom.appendChild( stats.dom );
  // stats.domElement.style.display = 'none';
}

const initFloor = () => {
  const helper = new THREE.GridHelper(8000, 300);
  helper.position.x = 1200;
  helper.position.y = - 1;
  helper.position.z = -2000;
  helper.material.opacity = 0.25;
  helper.material.transparent = true;
  addObject(helper);
}


const addObject = (object: any) => {
  scene.add(object);
  objects.push(object);
}



onMounted(() => {
  start();
})
</script>
​
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