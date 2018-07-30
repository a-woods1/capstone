import * as THREE from 'three';
import go from '../../images/go.png';

export function LinkedView( scene, thisPosition, thisId ) {

	const sceneLink = drawSceneLink(scene, thisPosition);
	const position = thisPosition;
	const id = thisId;
	const domLink = drawDomLink();

	// destroys the DOM annotation
	function destroyDomLink() {
		domLink.parentElement.removeChild(domLink);
	}

	// destroys the Scene annotation
	function destroySceneLink() {
		scene.remove(sceneLink);
	}

	// Draw an annotation onto the DOM
	function drawDomLink() {

		//console.log('drawDomLink called');

		var linkContainer = document.createElement("span");
		linkContainer.className = "link-container";

		var linkLabel = document.createElement("span");
		var labelNode = document.createTextNode("Move Here");
		linkLabel.appendChild(labelNode);
		linkLabel.className = "link-label";
		var linkPin = document.createElement("a");
		linkPin.className = "link";
		var pinImg = document.createElement('IMG');
		pinImg.src = go;
		linkPin.appendChild(pinImg);

		linkContainer.appendChild(linkPin);
		linkContainer.appendChild(linkLabel);

		// TODO: add index to thisId
		var xId = "link-" + thisId;
		linkPin.setAttribute("id", xId);
		linkPin.setAttribute("href", "#");
		document.getElementById("ThreeContainer").appendChild(linkContainer);

		// returns the DOM element
		return linkContainer;
	}

	// adds a listener to the <a> tag
	function addDomListener( callback, viewId ) {

		//console.log('addDomListener called: ');
		//console.log('id : ' + viewId);


		domLink.addEventListener("click", function(){
			callback(viewId);
		});

	}

	// OPTIONAL: draws a three.js mesh into the scene at the position
	// of the annotation
	function drawSceneLink( scene, position ) {

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
	function updateDomLinkPosition(canvas, cameraManager) {

		// console.log('updateDomLinkPosition called');

		var vector = new THREE.Vector3(position.x, position.y, position.z);

		vector.project(cameraManager.camera);

		var screenCoords = new THREE.Vector2();

		screenCoords.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio)) + canvas.offsetLeft;
		screenCoords.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio)) + canvas.offsetTop;

		// if this isn't in the frustrum, ignore it
		if(vector.z < 1.0) {

			if(vector.x > 1.0 || vector.x < -1.0 || vector.y > 1.0 || vector.y < -1.0) {
				domLink.style.display = 'none';
			} else {
				domLink.style.display = 'block';
				domLink.style.left = `${screenCoords.x}px`;
				domLink.style.top = `${screenCoords.y}px`;
			}
		} else {
			domLink.style.display = 'none';
		}

	}

	return {
		id,
		addDomListener,
		destroyDomLink,
		destroySceneLink,
		updateDomLinkPosition
	}

}
