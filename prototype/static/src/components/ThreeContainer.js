import React, { Component } from 'react';
import { threeEntryPoint } from './threejs/threeEntryPoint';
import ImmersiveControls from './ImmersiveControls.js';

class ThreeContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	//console.log('state:');
  	//console.log(threeEntryPoint);
    this.threeEntryPoint = threeEntryPoint(this.threeRootElement, this.props.activeViewId);
    this.props.setThreeEntryPoint(this.threeEntryPoint);
}

  render () {
      return (
      	<div
      		className={(this.props.immersiveOpen ? 'show' : 'hide')}
      		ref={element => this.immersiveContainer = element}
          aria-hidden={(this.props.immersiveOpen ? 'false' : 'true')}
          >
      		<ImmersiveControls
            changeImmersive={this.props.changeImmersive}
            activeViewData={this.props.activeViewData}
            immersiveNavigatorExpanded={this.props.immersiveNavigatorExpanded}
            toggleImmersiveNavigator={this.props.toggleImmersiveNavigator.bind(this)}
      			close = {this.props.hideImmersive}
            stages = {this.props.stages}
            previewScenes={this.props.previewScenes}
            />
	        <div
	        	id="ThreeContainer"
	        	ref={element => this.threeRootElement = element} />
        </div>
      );
  }

  closeImmersiveView() {
  	this.immersiveContainer.className = "hide";
  	// this.threeRootElement;
  }

}

export default ThreeContainer;
