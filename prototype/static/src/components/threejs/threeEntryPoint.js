import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { CanvasManager } from './CanvasManager';
import { DataManager } from './DataManager';
import { InteractionManager } from './InteractionManager';

export function threeEntryPoint(container, viewId) {

    // Use this to start / stop rendering
    var shouldRender = true;

    // Singleton pattern test
    var instance;

    // set up a dataManager instance,
    // which is responsible for managing view
    // relationships and annotation data
    const dataManager = new DataManager(viewId);

    // set up the canvasManager instance,
    // which is responsible for the renderer
    // and canvas
    const canvasManager = new CanvasManager(document, container);

    // set up a new SceneManager instance
    const sceneManager = new SceneManager(dataManager, canvasManager);

    // set up an interactionManager instance
    const interactionManager = new InteractionManager(sceneManager, canvasManager);

    // initialize
    init();

    // threeEntryPoint will control the main render loop
    render();

    function init() {

        console.log('threeEntryPoint init() called');

        // initialize event listeners
        interactionManager.initEventListeners();

        // init the photosphere
        // then load the texture corresponding to the
        // current record in data
        sceneManager.initPhotoSphere().changeView(dataManager.data.id);

    }

    // for changing the view based on a React prop
    function changeView( id ) {
        console.log('threeEntryPoint changeView called');
        sceneManager.changeView(id);
    }

    // see if this can be called by a React component
    function updateRenderer() {
        canvasManager.updateRenderer();
        sceneManager.cameraManager.updateAspect();
    }

    // use this to pause rendering
    function pauseRender() {
        shouldRender = false;
    }

    // use this to resume rendering
    function resumeRender() {
        shouldRender = true;
        render();
    }

    // standard render function
    function render(time) {

        if(shouldRender) {

            // console.log('animation loop going');

            // console.log('is rendering');
            // this starts the animation loop
            window.requestAnimationFrame(render);
            sceneManager.update();
            canvasManager.update(canvasManager.renderer, sceneManager.scene, sceneManager.cameraManager.camera);

        }
    }

    return {
        changeView,
        canvasManager,
        dataManager,
        sceneManager,
        pauseRender,
        resumeRender,
        updateRenderer
    }

}