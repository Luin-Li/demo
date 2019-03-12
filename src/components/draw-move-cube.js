const THREE = require('three');

// 1.场景
let scene
const initScene = () => {
  scene = new THREE.Scene() 
  scene.background = new THREE.Color( 0xffffff );
}


// 2.相机
let camera
const initCamera = () => {
    camera = new THREE.PerspectiveCamera( 20, 1, 1, 500 )
    camera.position.set(60,60,60)
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
    const line = document.getElementById('moveCube')
    line.appendChild(renderer.domElement);
}

// 4.往场景打灯光
const initLight = () => {
    // 环境光
    // const light = new THREE.AmbientLight(0x000000,1)
    // scene.add(light);
}

// 5.创建一个立方体，添加物体到场景中
let mesh
const initObject = () => {
    const geometry = new THREE.BoxGeometry( 10,10,10);
 
    const colorList = ['0xffeb3b','0xffb300','0xe6ee9c','0xaed581','0xa5d6a7','0x80cbc4']

    for ( var i = 0; i < geometry.faces.length; i += 2 ) { // 为几何体每个面添加随机颜色

        var hex = colorList[i / 2];
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );

    }

    const material = new THREE.MeshBasicMaterial( {vertexColors: THREE.VertexColors} );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
}

// 6.绘制辅助网格和坐标
const initHelperClass = () => {
    drawGrid()
    drawAxisHelper()
}

const drawAxisHelper = () => { // 显示坐标轴The X axis is red. The Y axis is green. The Z axis is blue.
    const axisHelper = new THREE.AxisHelper( 45 );
    scene.add( axisHelper );
}

const drawGrid = () => { // 绘制辅助网格
    const size = 200;
    const step = 45;

    const gridHelper = new THREE.GridHelper( size, step );
    scene.add( gridHelper );
}

// 7.让立方体旋转
const animate = () => {
    requestAnimationFrame( animate )
    render()
}

const render = () => {
    mesh.rotateY(0.01); // 围绕Y轴旋转，表示围绕Y轴旋转0.01弧度
    renderer.render(scene, camera);
}

// 8.渲染
const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initLight()
    initObject()
    initHelperClass()
    animate()
}



export {draw as drawMoveCube}
