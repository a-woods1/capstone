import * as THREE from 'three';

export function Annotation( scene, thisPosition, thisData ) {

	const sceneAnnotation = drawSceneAnnotation(scene, thisPosition);
	const position = thisPosition;
	const data = thisData;
	var index = 0;
	var domPin;
	var domData;
	const domAnnotation = drawDomAnnotation();
	var isVisible = false;

	// add event listeners
	function addListeners() {

		domPin.classList.add('annotation-pin-inactive');
		domData.classList.add('annotation-data-inactive');

		domPin.addEventListener("mouseenter", onPinMouseEnter);
		domPin.addEventListener("mouseleave", onPinMouseLeave);
		domPin.addEventListener("focusin", onPinMouseEnter);
		domPin.addEventListener("focusout", onPinMouseLeave);		

		domPin.addEventListener("click", onPinClick);

	}

	// shows the annotation
	function onPinMouseEnter( e ) {

		// console.log('mouse entered' + domPin);
		domPin.classList.remove('annotation-pin-inactive');
		domPin.classList.add('annotation-pin-active');

		toggleAnnotation();

	}

	// hides the annotation
	function onPinMouseLeave( e ) {

		// console.log('mouse left' + domPin);
		domPin.classList.remove('annotation-pin-active');
		domPin.classList.add('annotation-pin-inactive');

		toggleAnnotation();

	}

	function onPinClick ( e ) {

		console.log('clicked');

	}

	// shows the annotation
	function toggleAnnotation () {

		if(!isVisible) {

			// show the annotation
			domData.classList.remove('annotation-data-inactive');
			domData.classList.add('annotation-data-active');

		} else {

			// hide the annotation
			domData.classList.remove('annotation-data-active');
			domData.classList.add('annotation-data-inactive');
		}

		isVisible = !isVisible;

	}

	// destroys the DOM annotation
	function destroyDomAnnotation() {
		domAnnotation.parentElement.removeChild(domAnnotation);
	}

	// destroys the Scene annotation
	function destroySceneAnnotation() {
		scene.remove(sceneAnnotation);
	}

	// Draw an annotation onto the DOM
	function drawDomAnnotation() {

		// console.log('called drawDomAnnotation');
		// console.log(data);
		// Create 'annotation-icon' which is always there
		// Create 'annotation-data' which can appear/disappear
		// on hover

		// add a listener for this particular annotation
		// to show/hide

		var annotationContainer = document.createElement("div");
		annotationContainer.className = "annotation-container";
		var annotationPin = document.createElement("div");
		annotationPin.className = "annotation-pin";
		annotationPin.setAttribute("tabIndex","0");
		// var pinNode = document.createTextNode('i');
		var pinImg = document.createTextNode("i");
		// console.log('imported',info);
		annotationPin.appendChild(pinImg);
		// annotationPin.appendChild(pinNode);
		domPin = annotationPin;

		// Create a text node to house the data
		var annotationData = document.createElement("span");
		var dataNode = document.createTextNode(data);
		annotationData.appendChild(dataNode);
		annotationData.className = "annotation-data";
		domData = annotationData;

		document.getElementById("ThreeContainer").appendChild(annotationContainer);
		annotationContainer.appendChild(annotationPin);
		annotationContainer.appendChild(annotationData);

		// add listeners to the DOM elements
		addListeners();

		// returns the DOM element
		return annotationContainer;
	}

	// OPTIONAL: draws a three.js mesh into the scene at the position
	// of the annotation
	function drawSceneAnnotation( scene, position ) {

		//console.log('drawSceneAnnotation called');
		//console.log(position);

		// var annotationMesh = new THREE.Mesh(
		//     new THREE.SphereGeometry(.6),
		//     new THREE.MeshPhongMaterial({
		//         color: 0xffff00,
		//         emissive: 0xffff00,
		//         side: THREE.DoubleSide,
		//         shading: THREE.FlatShading
		//     })
		// );

		var annotationMesh = new THREE.Mesh();

		scene.add( annotationMesh );
		annotationMesh.position.set(position.x, position.y, position.z);

		return annotationMesh;
	}

	// update the position of the annotation in the DOM
	function updateDomAnnotationPosition(canvas, cameraManager) {

		// console.log('updateDomAnnotationPosition called');

		var vector = new THREE.Vector3(position.x, position.y, position.z);

		vector.project(cameraManager.camera);

		var screenCoords = new THREE.Vector2();

		screenCoords.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
		screenCoords.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

		// if this isn't in the frustrum, ignore it
		if(vector.z < 1.0) {

			if(vector.x > 1.0 || vector.x < -1.0 || vector.y > 1.0 || vector.y < -1.0) {
				domAnnotation.style.display = 'none';
			} else {
				domAnnotation.style.display = 'block';
				domAnnotation.style.left = `${screenCoords.x}px`;
				domAnnotation.style.top = `${screenCoords.y}px`;

				// var offset = domData.innerWidth / 2;
				// domData.style.marginLeft = -1.0 * offset;

			}
		}  else {
			domAnnotation.style.display = 'none';
		}

	}

	// use this to indicate the index of this annotation
	function setIndex( i ) {

		//console.log('setIndex called: ' + i);
		index = i;

		// Set the Id in the DOM
		var thisId = "annotation-" + index;
		domAnnotation.setAttribute("id", thisId);

	}

	return {
		data,
		destroyDomAnnotation,
		destroySceneAnnotation,
		setIndex,
		updateDomAnnotationPosition
	}

}
