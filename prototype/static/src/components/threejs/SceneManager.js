import * as THREE from 'three';
import { CameraManager } from './CameraManager';
import { PhotoSphere } from './PhotoSphere';

export function SceneManager(dataManager, canvasManager) {

	// set up a clock for three.js to use
	const clock = new THREE.Clock();

	// set up the scene itself
	const scene = initScene();

	// init CameraManager
	const cameraManager = new CameraManager(canvasManager);

	// set up sphere geometry
	const geometry = initGeometry();
	const mesh = initMesh();

	// initialize lights
	const lights = initLights();

	// current PhotoSphere
	var photoSphere;

	// changes the view in the photoSphere
	// to a certain Id
	function changeView( id ) {

		if(photoSphere != null) {
			photoSphere.changeView( id );
		} else {
			console.log('error with photosphere reference; it is null');
		}

	}

	function destroyAugmentations () {
		photoSphere.destroyAugmentations();
	}

	// creates sphere geometry
	function initGeometry() {

		//console.log('initGeometry called');

		// create the geometry
		const geometry = new THREE.SphereBufferGeometry( 100, 32, 32 );

		// invert the scale to reverse normals
		geometry.scale( -1, 1, 1 );

		// TODO: set sphere orientation (see viewer.js)
		return geometry;
	}

	// creates a light in the scene
	function initLights() {

		//console.log('initLights called');
	    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	    scene.add( directionalLight );

	    return directionalLight;

	}

	function initMesh() {

		//console.log('initMesh called');

		// load a temporary material
		var material = new THREE.MeshBasicMaterial( {color: 0x0000ff } );
		const mesh = new THREE.Mesh( geometry, material );

		scene.add( mesh );

		// DEBUG: WIREFRAME SPHERE
		// TODO: Delete this
		// draws wireframe around the sphere itself
	 //    const wireframeSphere = new THREE.LineSegments(
	 //        new THREE.WireframeGeometry(geometry),
	 //        new THREE.LineBasicMaterial({
	 //            color: 0xffffff,
	 //            linewidth: 5,
	 //            opacity: 1.0,
	 //            transparent: true
	 //        })
		// );

	 //    scene.add( wireframeSphere );

		return mesh;

	}

	// creates a new scene
	function initScene() {

		//console.log('buildScene called');

		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#FFF");

		return scene;
	}

	// creates a new PhotoSphere
	function initPhotoSphere() {

		photoSphere = new PhotoSphere(canvasManager.canvas, cameraManager, dataManager, scene, geometry, mesh);

		return photoSphere;
	}

	// runs on animationFrame
	function update() {

		// TODO: Need to log the scene to determine
		// source of slowdown
		// console.log(scene);
		cameraManager.update();
		photoSphere.update();

	}

	// interesting - somehow, this makes the
	// function public
	return {
		changeView,
		cameraManager,
		destroyAugmentations,
		initPhotoSphere,
		photoSphere,
		scene,
		update
	}

}
