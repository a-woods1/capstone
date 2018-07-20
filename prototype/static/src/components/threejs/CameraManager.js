import * as THREE from 'three';

export function CameraManager(canvasManager) {

	// set up camera
	const camera = initCamera();	

	// use TWEEN.JS for smooth animation
    var TWEEN = require('@tweenjs/tween.js');	

	// variables for lat/lon
	var lat = 0;
	var lon = 0;
	const lonSens = 15; // how sensitive is the viewer to keyboard left/right navigation
	const latSens = 10; // how sensitive is the viewer to keyboard up/down navigation	
	var phi = 0;
	var theta = 0;
	var distance = 10;
	var keysTweenTime = 500;

	function getLon() {
		return lon;
	}

	function getLat() {
		return lat;
	}

	// creates a new camera
	function initCamera() {

		// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
		const camera = new THREE.PerspectiveCamera( 75, canvasManager.canvas.width / canvasManager.canvas.height, 1, 1100 );
		// camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		camera.target = new THREE.Vector3( 0, 0, 0 );		

		return camera;

	}

	// increment lon by a predefined amount
	function incrementLon(dir) {
		
		var deg = dir * lonSens;

		var tweenLon = {x: lon};

		var tween = new TWEEN.Tween(tweenLon)
		.to({x: (lon + deg)}, keysTweenTime)
		.easing(TWEEN.Easing.Quadratic.Out)
		.onUpdate(function(){
			// console.log('lon should be updating');
			// console.log(tweenLon);
			lon = tweenLon.x;
		})
		.start();		

	}

	// increment lat by a predefined amount
	function incrementLat(dir) {

		var deg = dir * latSens;

		var tweenLat = {x: lat};

		var tween = new TWEEN.Tween(tweenLat)
		.to({x: (lat + deg)}, keysTweenTime)
		.easing(TWEEN.Easing.Quadratic.Out)
		.onUpdate(function(){
			// console.log('lon should be updating');
			// console.log(tweenLat);
			lat = tweenLat.x;
		})
		.start();	

	}	

	function setLon(val) {
		lon = val;
		return lon;
	}

	function setLat(val) {
		lat = val;
		return lat;
	}

	function updateAspect() {

		console.log('updateAspect called')
		console.log(canvasManager.canvas.width);
		console.log(canvasManager.canvas.height);		

		camera.aspect = canvasManager.canvas.width / canvasManager.canvas.height;
		camera.updateProjectionMatrix();

	}


	// handle camera positioning
	function updatePosition() {

		lat = Math.max( - 85, Math.min( 85, lat ) ); // this constrains the amount of up/down movement
		phi = THREE.Math.degToRad( 90 - lat );
		theta = THREE.Math.degToRad( lon );

		camera.position.x = distance * Math.sin( phi ) * Math.cos( theta );
		camera.position.y = distance * Math.cos( phi );
		camera.position.z = distance * Math.sin( phi ) * Math.sin( theta );

		camera.lookAt( camera.target );

	}

	function update() {

        TWEEN.update();		
		updatePosition();

	}


	return {
		camera,
		getLon,
		getLat,
		initCamera,
		incrementLon,
		incrementLat,
		setLon,
		setLat,		
		update,
		updateAspect		
	}

}