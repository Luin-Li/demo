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
    camera = new THREE.PerspectiveCamera( 45, 1, 1, 500 )
    camera.position.set(130,130,130)
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
    document.getElementById('font').appendChild(renderer.domElement)
}

// 4.光照
const initLight = () => {
    const light2 = new THREE.AmbientLight(0xb39ddb,1)
    scene.add(light2);
}


// 5.创建物体，添加物体到场景中
const initObject = () => {
    // 辅助轴
    const axisHelper = new THREE.AxisHelper( 100 );
    scene.add( axisHelper );

    let fontLoader = new THREE.FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',function(font) {
      let textGeometry = new THREE.TextGeometry('GOWILD',{
        font: font,
        size: 18,
		height: 10,
		// curveSegments: 12,
		// bevelEnabled: true,
		// bevelThickness: 2,
		// bevelSize: 5
      })
      var meshMaterial = new THREE.MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 1
      })
    //   const textMesh = new THREE.Points(textGeometry, new THREE.PointsMaterial( { size: 100, color: '0x29b6f6' } ))
      const textMesh = new THREE.Mesh(textGeometry, meshMaterial)
      textMesh.position.set(0, 0, 0)
      scene.add(textMesh)
      // 必须在这里渲染一次，因为字体加载是异步的，否则在字体包还没加载完就渲染了就看不到字体了
      renderer.render(scene,camera)
    })
}

// 6.渲染
const draw = () => {
    initScene()
    initCamera()
    initRenderer()
    initLight()
    initObject()
}



export {draw as drawFont}
