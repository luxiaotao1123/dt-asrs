import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

class Player {

    constructor(selector) {
        this.container = document.querySelector(selector);
        this.container;
        this.scene;
        this.renderer;
        this.camera;
        this.dom;
        this.orbitControl;
        this.objects = [];//场景中所有对象的集合
    }

    // 启动函数
    startup = () => {
        this.initMain();
        this.animate();
    }

    initMain = () => {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initBackground();
        this.initOrbitControl();
        this.initLight();
        this.initStats();
        this.initResize(this);
        this.initFloor();
        this.defineGeometry();
    }

    animate = () => {
        requestAnimationFrame(this.animate)
        this.renderer.render(this.scene, this.camera);
    }

    initScene = () => {
        this.scene = new THREE.Scene();
    }

    initCamera = () => {
        if (!this.camera) {
            this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50000);
            this.camera.position.set(-350, 600, 1100);
            this.camera.lookAt(this.scene.position);
            //将相机放到场景中
            this.scene.add(this.camera);
        } else {
            this.camera.position.set(-350, 600, 1100);
            this.camera.lookAt(this.scene.position);
        }
    }

    initRenderer = () => {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            logarithmicDepthBuffer: true
        });
        // this.renderer.toneMapping = THREE.CineonToneMapping;	// 色调
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        // this.renderer.shadowMap.enabled = true;	// 是否开启阴影
        this.renderer.shadowMap.type = THREE.BasicShadowMap;
        this.dom = this.container;
        this.dom.appendChild(this.renderer.domElement);
    }

    initOrbitControl = () => {
        this.orbitControl = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControl.enableDamping = true;
        this.orbitControl.dampingFactor = 0.5;
        // 视角最小距离
        this.orbitControl.minDistance = 0;
        // 视角最远距离
        this.orbitControl.maxDistance = 10000;
        // 最大角度
        //this.orbitControl.maxPolarAngle = Math.PI / 2.2;
    }

    initBackground = () => {
        this.scene.background = new THREE.Color(0x333333);
    }

    initLight = () => {
        //首先添加个环境光
        let ambient = new THREE.AmbientLight(0xffffff, 1); //AmbientLight,影响整个场景的光源
        ambient.position.set(0, 0, 0);
        this.addObject(ambient);

        // 阴影聚光灯
        let pointLight = new THREE.SpotLight(0xFFFAFA, 1);
        pointLight.position.set(0, 1500, 2500);
        // pointLight.castShadow = true; 	// 是否开启阴影
        pointLight.shadow.camera.near = 2000;
        pointLight.shadow.camera.far = 10000;
        pointLight.shadow.mapSize.height = 200000;
        pointLight.shadow.mapSize.width = 200000;
        this.addObject(pointLight);
    }

    initStats = () => {
        // stats = new Stats();
        // dom.appendChild( stats.dom );
        // stats.domElement.style.display = 'none';
    }

    initResize = (object) => {
        window.addEventListener('resize', function () {
            object.camera.aspect = window.innerWidth / window.innerHeight;
            object.camera.updateProjectionMatrix();
            object.renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
    }

    initFloor = () => {
        const helper = new THREE.GridHelper(8000, 300);
        helper.position.x = 1200;
        helper.position.y = - 1;
        helper.position.z = -2000;
        helper.material.opacity = 0.25;
        helper.material.transparent = true;
        this.addObject(helper);
    }

    addObject = (object) => {
        this.scene.add(object);
        this.objects.push(object);
    }

    defineGeometry = () => {
        // const planeGeometry = new THREE.planeGeometry(1000, 1000);
        // const planeMaterial = new THREE.MeshBasicMaterial()
    }

}

export default Player;