const THREE = require('three');


// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene() 
}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 45, 1, 1, 500 )
    camera.position.set(50,50,50)
    camera.up.z = 0
    camera.up.y = 1
    camera.up.x = 0
    camera.lookAt(new THREE.Vector3(0,0,0));
}

// 3.渲染器
let renderer
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(200,200)
    const line = document.getElementById('light')
    line.appendChild(renderer.domElement);
    // renderer.setClearColor(0xFFFFFF, 1.0);
}

// 4.往场景打灯光
const initLight = () => {
    // 环境光rgb(179,157,219)
    const light2 = new THREE.AmbientLight(0xb39ddb,1)
    scene.add(light2);

    // 聚光灯rgb(255,255,255)
    const light = new THREE.SpotLight(0xffffff, 0.5)
    light.position.set(0, 150,0);
    scene.add(light);

    // 叠加rgb(217,206,237)
}

// 5.创建物体，添加物体到场景中
const initObject = () => {
    const geometry = new THREE.CylinderBufferGeometry( 5, 10, 20, 20);
    const material = new THREE.MeshLambertMaterial( {color: 0xb39ddb} );
    const cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.set(0,0,0);
    scene.add( cylinder );
}

// 6.渲染
const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initLight()
    initObject()
    renderer.clear();
    renderer.render(scene,camera)
}



export {draw as drawLight}
