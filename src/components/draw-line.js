const THREE = require('three');


// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene() 
}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 )
}

// 3.渲染器
let renderer
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(200,200)
    document.getElementById('line').appendChild(renderer.domElement)
}

// 4.添加物体到场景中，渲染

