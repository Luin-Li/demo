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
    camera.position.set(0,-200,0)
    camera.up.z = 1
    camera.up.x = 0
    camera.up.y = 0
    camera.lookAt(new THREE.Vector3(0,0,0));
}

// 3.渲染器
let renderer
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(200,200)
    const line = document.getElementById('newwork')
    line.appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
}

// 4.创建物体，添加物体到场景中
const initObject = () => {
    const geometry = new THREE.Geometry()
    const material = new THREE.LineBasicMaterial({ 
        color: 0xbdbdbd
    })

    const p1 = new THREE.Vector3(-80,0,0)
    const p2 = new THREE.Vector3(80,0,0)
    geometry.vertices.push(p1,p2)

    // 从x轴-80到80，z轴-80到80，每隔10画一条线，共画8条
    for (let i = 0; i < 16; i++) {
        let line1 = new THREE.Line(geometry,material)
        line1.position.z = (i * 10) - 80
        scene.add(line1)

        let line2 = new THREE.Line(geometry,material)
        line2.rotation.y = (Math.PI) / 2
        line2.position.x = (i * 10) - 80
        scene.add(line2)

    }
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



export {draw as drawNetwork}
