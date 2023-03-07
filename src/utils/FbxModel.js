import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

class FbxModel {

    actions = [];
    object;
    mixer;

    constructor(object) {
        let that = this;
        that.object = object;
        that.mixer;
        const loader = new FBXLoader();
        loader.load('model/Breakdance Uprock Var 2.fbx', function (mesh) {
            that.mixer = new THREE.AnimationMixer(mesh);

            for (let i = 0; i < mesh.animations.length; i++) {
                that.actions[i] = that.mixer.clipAction(mesh.animations[i]);
            }

            mesh.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    // child.material = new THREE.MeshLambertMaterial({
                    //     color: 0xCD6839
                    // });
                }
            });

            that.object.addObject(mesh);
        });

    }
}

export default FbxModel