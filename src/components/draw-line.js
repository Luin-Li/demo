const THREE = require('three');


// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene() 
}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 45, 1, 1, 1000 )
    camera.position.set(0,-10,0)
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ));
}

// 3.渲染器
let renderer
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(200,200)
    const line = document.getElementById('line')
    line.appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

// 4.创建物体，添加物体到场景中
const initObject = () => {
    const geometry = new THREE.Geometry()
    const material = new THREE.LineBasicMaterial({ 
        color: 0xb39ddb
    })

    const p1 = new THREE.Vector3(-100,0,100)
    const p2 = new THREE.Vector3(100,0,-100)
    geometry.vertices.push(p1)
    geometry.vertices.push(p2)

    const line = new THREE.Line(geometry, material)
    scene.add(line)
}

// 5.渲染
const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initObject()
    renderer.clear();
    renderer.render(scene,camera)
}



export {draw as drawLine}
