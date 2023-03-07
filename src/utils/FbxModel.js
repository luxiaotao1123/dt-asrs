import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

class FbxModel {

    object;
    mixer;

    constructor(object) {
        let that = this;
        that.object = object;
        that.mixer;
        const loader = new FBXLoader();
        loader.load('model/Standing Dodge Backward.fbx', function (object) {

            that.mixer = new THREE.AnimationMixer(object);

            const action = that.mixer.clipAction(object.animations[0]);
            action.play();

            object.traverse(function (child) {

                if (child.isMesh) {

                    child.castShadow = true;
                    child.receiveShadow = true;
                    // child.material = new THREE.MeshLambertMaterial({
                    //     color: 0xCD6839
                    // });
                }

            });

            that.object.addObject(object);

        });


    }



}

export default FbxModel