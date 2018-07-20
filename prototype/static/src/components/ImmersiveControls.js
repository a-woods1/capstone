import React, { Component } from 'react';
import exit from '../img/exit.png';
import ImmersiveNavigator from './ImmersiveNavigator.js';

class ImmersiveControls extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
      return (
      	<div id="ImmersiveControls">
          <div id="imm-shim"></div>        
          <ImmersiveNavigator
            changeImmersive={this.props.changeImmersive}
            activeViewData={this.props.activeViewData}
            immersiveNavigatorExpanded={this.props.immersiveNavigatorExpanded}          
            toggleImmersiveNavigator={this.props.toggleImmersiveNavigator.bind(this)}          
            close = {this.props.hideImmersive}     
            stages = {this.props.stages}
            previewScenes={this.props.previewScenes}            
          />
      		<img id="imm-exit" src={exit} onClick={this.props.close} />
        </div>
      );
  }

}

export default ImmersiveControls;