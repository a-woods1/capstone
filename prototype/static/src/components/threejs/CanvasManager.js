import * as THREE from 'three';

export function CanvasManager(document, container) {

    // Renderer and Canvas constants
    const renderer = initRenderer();
    const canvas = initCanvas(document, container, renderer);

    // creates a new renderer
    function initRenderer() {

        console.log('initRenderer called')

        // initializer WebGL renderer
        var r = new THREE.WebGLRenderer();
        r.setPixelRatio( window.devicePixelRatio );
        r.setSize( container.clientWidth, container.clientHeight );
    
        return r;

    }

    // creates a canvas
	function initCanvas(document, container, renderer) {

        console.log('initCanvas called');

        const c = renderer.domElement;
        container.appendChild(c);
        return c;
    }

    function update(renderer, scene, camera) {

        renderer.render(scene, camera);
        
    }

    // updates renderer
    function updateRenderer() {

        console.log('updateRenderer called');
        console.log('container is ', container);
        console.log(container.clientWidth);
        console.log(container.clientHeight);

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( container.clientWidth, container.clientHeight );
        return renderer;

    }    

    // createCanvas should be public
    return {
        canvas,
        renderer,
        update,
        initRenderer,
    	initCanvas,
        updateRenderer        
    }

}