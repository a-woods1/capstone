import * as THREE from 'three';
import { Annotation } from './Annotation';
import { LinkedView } from './LinkedView';

export function PhotoSphere(canvas, cameraManager, dataManager, scene, geometry, mesh) {

	// array to hold annotations
	var annotations = [];
	var linkedViews = [];

	// change the Photosphere to a new view
	function changeView ( id ) {

		//console.log('changeView called: ');
		//console.log(id);

		destroyAugmentations();

		var newData = dataManager.getDataById ( id );

		//console.log(newData);

		// TODO: The scene isn't removing the mesh which
		// is causing performance issues
		scene.remove( mesh );

		loadAnnotations( newData );
		loadLinks( newData );

		//console.log(cameraManager);

		// set orientation
		cameraManager.setLon(newData.defaultTarget.lon);
		cameraManager.setLat(newData.defaultTarget.lat);

		var texture = loadTexture ( newData );
		var material = new THREE.MeshBasicMaterial( { map : texture } );
		var newMesh = new THREE.Mesh( geometry, material );

		scene.add ( newMesh );

	}

	// destroys all annotations and linkedViews
	function destroyAugmentations () {

		for(var i = 0; i < annotations.length; i++) {
			annotations[i].destroyDomAnnotation();
			annotations[i].destroySceneAnnotation();
		}

		annotations = [];

		for(var i = 0; i < linkedViews.length; i++)
		{
			linkedViews[i].destroyDomLink();
			linkedViews[i].destroySceneLink();
		}

		linkedViews = [];

	}

	// load Annotations for this Photosphere
	function loadAnnotations ( data ) {

		//console.log('loadAnnotations called');

		// Draw an annotation
		for(var i = 0; i < data.annotations.length; i++)
		{
			//console.log( 'loading annotation from data ' );
			var a = new Annotation( scene, data.annotations[i].position, data.annotations[i].data );
			a.setIndex(annotations.length);
			annotations.push(a);
			//console.log(annotations);
		}

	}

	// load LinkedViews for this Photosphere
	function loadLinks ( data ) {

		for(var i = 0; i < data.linkedViews.length; i++)
		{
			//console.log( 'loading linkedView from data ' );
			var a = new LinkedView( scene, data.linkedViews[i].position, data.linkedViews[i].id );
			a.addDomListener(changeView, a.id);
			linkedViews.push(a);
		}

	}

	// load a texture from data
	// TODO: move this to DataManager
	function loadTexture ( data ) {

		var textures = [
				require("../textures/g-58th-ext-3.jpg"),
				require("../textures/g-58th-ext-4.jpg"),
				require("../textures/g-58th-desk-2.jpg"),
				require("../textures/g-badge-1.jpg"),
				require("../textures/g-elevator-1.jpg"),
				require("../textures/6-elevator-2.jpg"),
				require("../textures/6-link-15.jpg"),
				require("../textures/6-link-13.jpg"),
				require("../textures/6-link-couch.jpg"),
				require("../textures/6-hall-2.jpg"),
				require("../textures/6-elevator-4.jpg"),
				require("../textures/21wa-ext-1.jpg"),
				require("../textures/21wa-int-1.jpg"),
				require("../textures/21wa-int-3.jpg"),
				require("../textures/21wa-int-4.jpg"),
				require("../textures/17w2-int-1.jpg"),
				require("../textures/7w7-int-5.jpg")				
		];
		console.log('textures');
		console.log(textures);

		//console.log('loadTexture called');
		var t;

		// Load photo texture
		var textureID = data.thumbnailID;

		console.log(data.thumbnailID);

		if(data.texture.textureType == "photo") {

			//console.log("loading photo texture");
			//console.log(data.texture.textureUrl);
			// TODO: TEMP WORKAROUND FOR LOCAL TESTING
			//var path = './' + data.texture.textureUrl;
			t = new THREE.TextureLoader().load( textures[textureID] );
		// Load video texture
		// TODO: Performance improves if all 'linked' videos
		// are pre-loaded in the background at this time
		} else if (data.texture.textureType == "video") {

			//console.log("loading video texture");
			var video = document.createElement( 'video' );
			video.width = 640;
			video.height = 360;
			video.loop = true;
			video.muted = false;
			video.src = data.texture.textureUrl;
			video.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
			video.play();

			t = new THREE.VideoTexture( video );
			t.minFilter = THREE.LinearFilter;
			t.format = THREE.RGBFormat;
		}

		//console.log("loadTexture is ending");

		return t;

	}

	function update () {

		// Update annotation positions
		for(var i = 0; i < annotations.length; i++) {
			annotations[i].updateDomAnnotationPosition(canvas, cameraManager);
		}

		// Update link positions
		for(var i = 0; i < linkedViews.length; i++) {
			linkedViews[i].updateDomLinkPosition(canvas, cameraManager);
		}

	}

	return {
		annotations,
		linkedViews,
		changeView,
		destroyAugmentations,
		update
	}

}
