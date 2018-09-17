const THREE = require('three');
const Stats = require('stats-js')
const TWEEN = require('@tweenjs/tween.js')


// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene() 
}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 45, 1, 1, 1000 )
    camera.position.set(0,-300,0)
    camera.up.z = 1
    camera.up.x = 0
    camera.up.y = 0
    camera.lookAt(new THREE.Vector3(0,0,50));
}

// 3.渲染器
let renderer
let stats
const initRenderer = () => {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(200,200)
    const line = document.getElementById('ballTrack')
    line.appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);

    // 性能监视器
    stats = new Stats()
    stats.domElement.style.float = 'right';
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.getElementById('ballTrack').appendChild(stats.domElement);
}

// 4.创建物体，添加物体到场景中
const initObject = () => {
    const geometry = new THREE.Geometry()
    const material = new THREE.LineBasicMaterial({ 
        color: 0xb3e5fc
    })

    const p1 = new THREE.Vector3(-100,0,0)
    const p2 = new THREE.Vector3(-50,0,50)
    const p3 = new THREE.Vector3(0,0,0)
    const p4 = new THREE.Vector3(50,0,50)
    const p5 = new THREE.Vector3(100,0,0)
    geometry.vertices.push(p1,p2)
    geometry.vertices.push(p2,p3)
    geometry.vertices.push(p3,p4)
    geometry.vertices.push(p4,p5)
    

    let line = new THREE.Line(geometry, material)
    scene.add(line)

}

// 5.初始化一个动点
let mesh
const initTween = () => {
    const geometry = new THREE.SphereGeometry(5);
    const material = new THREE.MeshBasicMaterial( {color: 0xcddc39} );
    const mesh = new THREE.Mesh(geometry,material)
    mesh.position.x = -100
    scene.add(mesh)
    let tween1 = new TWEEN.Tween(mesh.position)
    .to({x: -50, z: 50}, 2000)

    let tween2 = new TWEEN.Tween(mesh.position)
    .to({x: 0, z: 0}, 2000)

    let tween3 = new TWEEN.Tween(mesh.position)
    .to({x: 50, z: 50}, 2000)

    let tween4 = new TWEEN.Tween(mesh.position)
    .to({x: 100, z: 0}, 2000)

    let tween5 = new TWEEN.Tween(mesh.position)
    .to({x: -100, z: 0}, 1)

    tween1.chain(tween2);
	tween2.chain(tween3);
	tween3.chain(tween4);
    tween4.chain(tween5);
    tween5.chain(tween1);
    
    tween1.start();

}

// 6.渲染
const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initObject()
    initTween()
    renderer.clear();
    animate();
}

// 7.循环渲染
const animate = () => {
    render(); // 渲染函数
    requestAnimationFrame( animate );
    stats.update();   
}

const render = () => {
    TWEEN.update();
    renderer.render(scene,camera)
}


export {draw as drawBallTrack}
