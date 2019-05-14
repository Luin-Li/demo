const THREE = window.THREE = require('three');
const AlloyTouch = require('AlloyTouch')
require('three/examples/js/loaders/PLYLoader');
const TWEEN = require('@tweenjs/tween.js')

import plySrc from '../../static/test_0.ply'

// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xffffff );
//   scene.fog = new THREE.Fog( 0x130F33, 2, 15 ); // 线性雾效果

}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 35, 1, 1, 15 )
    camera.position.set(8, 2.15, 3)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
}

// 3.渲染器
let renderer
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( 1 );
    
    renderer.setSize(200, 200)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    renderer.shadowMap.enabled = true

    const face = document.getElementById('face')
    if (face.childNodes.length === 0) {
        face.appendChild(renderer.domElement);
    } else {
        face.replaceChild(renderer.domElement, face.childNodes[0]);
    }
}

// 4.往场景打灯光

const initLight = () => {
}

// 5.加载ply模型
let loader = new THREE.PLYLoader();
const initObject = () => {
    loader.load(plySrc, function( geometry ){

        geometry.computeVertexNormals();

        // ！！！必须设置使用顶点颜色vertexColors或FaceColors不然是画不出人脸皮肤
        // MeshBasicMaterial材质中的vertexColors设置为THREE.FaceColors，就可以让几何体的每个顶点，使用geometry.faces[i].color中的颜色。
        var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors,flatShading: true } );

        let mesh = new THREE.Mesh( geometry, material );
        // 人脸角度调整
        mesh.position.x = 2.2;
        mesh.position.y = 2.8;
        mesh.position.z = 3.0;
        mesh.rotation.y = 0
        mesh.rotation.x = 0;
        mesh.scale.multiplyScalar( 0.004 ); // 缩放模型大小

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );

        // let tween1 = new TWEEN.Tween(mesh.rotation)
        // .to({y: 8 * Math.PI / 16}, 3500).easing( TWEEN.Easing.Linear.None)

        // let tween2 = new TWEEN.Tween(mesh.rotation)
        // .to({y: 3 * Math.PI / 16}, 3500).easing( TWEEN.Easing.Linear.None)

        // let tween3 = new TWEEN.Tween(mesh.rotation)
        // .to({y: 8 * Math.PI / 16}, 3500).easing( TWEEN.Easing.Linear.None)

        // tween1.chain(tween2);
	    // tween2.chain(tween3);
	    // tween3.chain(tween1);
    
        // tween1.start();
        const alloyTouch = new AlloyTouch({
            touch:"#face",//反馈触摸的dom
            vertical: false,//不必需，默认是true代表监听竖直方向touch
            target: mesh.rotation, //运动的对象
            property: "y",  //被运动的属性
            factor: 0.00000008,//不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
            moveFactor: 0.2,//不必需,表示touchmove位移与被运动属性映射关系，默认值是1
            initialValue: 8 * Math.PI / 16
        })
        const alloyTouchX = new AlloyTouch({
            touch:"#face",//反馈触摸的dom
            vertical: true,//不必需，默认是true代表监听竖直方向touch
            target: mesh.rotation, //运动的对象
            property: "x",  //被运动的属性
            factor: 0.00000008,//不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
            moveFactor: 0.2,//不必需,表示touchmove位移与被运动属性映射关系，默认值是1
            initialValue: 0
        })
    });
    
}

// 6.绘制辅助网格和坐标

const drawAxisHelper = () => { // 显示坐标轴The X axis is red. The Y axis is green. The Z axis is blue.
    const axisHelper = new THREE.AxisHelper( 1 );
    scene.add( axisHelper );
}

// 7.渲染
const animate = () => {
    requestAnimationFrame( animate )
    render()
}

const render = () => {
    TWEEN.update();
	renderer.render( scene, camera )
}

const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initObject()
    drawAxisHelper()
    animate()
}



export {draw as drawFace}
