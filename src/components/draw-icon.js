import imgData from '../../img-data/img-data.json'
var THREE = require('three');
var camera, scene, renderer, stats, materials = [], parameters;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;
            
            var canvasHeight = 416;

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 75, 1, 1, 1 );

				scene = new THREE.Scene();
				// scene.fog = new THREE.FogExp2( 0x000000, 0.0008 );

				var geometry = new THREE.BufferGeometry();
				var vertices = [];

				var textureLoader = new THREE.TextureLoader();
				var sprite4 = textureLoader.load( 'img/point.png' );
				
				const length = imgData.data.length
				for ( var i = 0; i < length; i ++ ) {
                    const item = imgData.data[i]
					var x = item.x;
					var y = item.y;
					var z = 1;

					vertices.push( x, y, z );

				}

				geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

				parameters = [
					[ [ 0.54, 0.87, 0.59 ], sprite4, 1 ]
				];

				for ( var i = 0; i < parameters.length; i ++ ) {

					var color  = parameters[ i ][ 0 ];
					var sprite = parameters[ i ][ 1 ];
					var size   = parameters[ i ][ 2 ];

					materials[ i ] = new THREE.PointsMaterial( { 
						size: size, 
						// map: sprite, 
						blending: THREE.AdditiveBlending, 
						depthTest: false, 
						sizeAttenuation: false,
						fog: false,
						transparent : true } );
					materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );

					var particles = new THREE.Points( geometry, materials[i] );

					particles.rotation.x = 1;
					particles.rotation.y = 1;
					particles.rotation.z = 1;

					scene.add( particles );

				}

				renderer = new THREE.WebGLRenderer();
				// renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( 416, 418 );
                
                var icon = document.getElementsById('gowild-icon')
				icon.appendChild( renderer.domElement );

				// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				// document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				// window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = 416 / 2;
				windowHalfY = 418 / 2;

				camera.aspect = 416 / 418;
				camera.updateProjectionMatrix();

				renderer.setSize( 416, canvasHeight );

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function animate() {

				requestAnimationFrame( animate );

				render();
				// stats.update();

			}

			function render() {

				var time = Date.now() * 0.00005;

				// camera.position.x += ( mouseX - camera.position.x ) * 0.005;
				// camera.position.y += ( - mouseY - camera.position.y ) * 0.005;

				// camera.lookAt( scene.position );

				// for ( var i = 0; i < scene.children.length; i ++ ) {

				// 	var object = scene.children[ i ];

				// 	if ( object instanceof THREE.Points ) {

				// 		object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

				// 	}

				// }

				renderer.render( scene, camera );

			}