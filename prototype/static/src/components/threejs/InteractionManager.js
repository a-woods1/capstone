import * as THREE from 'three';

export function InteractionManager(sceneManager, canvasManager) {

	var sceneManager = sceneManager;

	// this is used as a toggle during mouseDown/mouseUp events
	var isUserInteracting = false;

	var onPointerDownPointerX;
	var onPointerDownPointerY;

	var onPointerDownLon;
	var onPointerDownLat;

	function initEventListeners() {

		// initialize event listeners
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'wheel', onDocumentMouseWheel, false );
		document.addEventListener( 'keydown', onDocumentKeyDown, false );
		window.addEventListener( 'resize', onWindowResize, false );		

	}

	function getIsUserInteracting() {

		return isUserInteracting;

	}

	function onWindowResize( event ) {

		// console.log('onWindowResize');
		canvasManager.updateRenderer();
		sceneManager.cameraManager.updateAspect();
	}

	function onDocumentMouseDown( event ) {

		// console.log('onDocumentMouseDown');

		event.preventDefault();
		isUserInteracting = true;

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownLon = sceneManager.cameraManager.getLon();
		onPointerDownLat = sceneManager.cameraManager.getLat();

		// console.log(sceneManager.cameraManager);

	}

	function onDocumentMouseMove( event ) {

		// console.log('onDocumentMouseMove');

		if(isUserInteracting) {

			sceneManager.cameraManager.setLon((( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon));	
			sceneManager.cameraManager.setLat((( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat));

		}

	}

	function onDocumentMouseUp( event ) {

		// console.log('onDocumentMouseUp');

		isUserInteracting = false;

	}

	function onDocumentMouseWheel( event ) {

		// console.log('onDocumentMouseWheel');

	}

	function onDocumentKeyDown ( event ) {

		// console.log('onDocumentKeyDown');

		// C KEY - TEST CLEARING ANNOTATIONS
		if(event.keyCode == "67")
		{
			sceneManager.destroyAugmentations ();
		}

		// ARROW KEYS:
		// left = 37
		// up = 38
		// right = 39
		// down = 40

		// LEFT ARROW - LOOK LEFT
		if(event.keyCode == "37")
		{
			sceneManager.cameraManager.incrementLon(-1);
		}

		// RIGHT ARROW - LOOK RIGHT
		if(event.keyCode == "39")
		{
			sceneManager.cameraManager.incrementLon(1);
		}	

		// DOWN ARROW - LOOK DOWN
		if(event.keyCode == "40")
		{
			sceneManager.cameraManager.incrementLat(1);
		}	

		// UP ARROW - LOOK UP
		if(event.keyCode == "38")
		{
			sceneManager.cameraManager.incrementLat(-1);
		}


	}

	return {
		getIsUserInteracting,
		initEventListeners
	}

}