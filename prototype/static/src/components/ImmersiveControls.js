import React, { Component } from 'react';
import exit from '../img/exit.png';
import ImmersiveNavigator from './ImmersiveNavigator.js';
import ImmersiveInstructions from './ImmersiveInstructions.js';

class ImmersiveControls extends Component {

  constructor(props) {
    super(props);

    this.closeOnEsc = this.closeOnEsc.bind(this);

  }

  componentDidMount() {

    window.addEventListener('keydown', this.closeOnEsc);

  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.closeOnEsc);

  }


  closeOnEsc(e) {

    // esc key
    if(e.keyCode == 27) {
      this.props.close();
    }

  }


  render () {
      return (
      	<div
          id="ImmersiveControls"
          role="dialog"
          aria-labelledby="dialog-title"
          tabIndex="0"
          aria-live="assertive"          
        >
          <div id="imm-shim"></div>
        <ImmersiveInstructions />
          <ImmersiveNavigator
            changeImmersive={this.props.changeImmersive}
            activeViewData={this.props.activeViewData}
            immersiveNavigatorExpanded={this.props.immersiveNavigatorExpanded}          
            toggleImmersiveNavigator={this.props.toggleImmersiveNavigator.bind(this)}          
            close = {this.props.hideImmersive}     
            stages = {this.props.stages}
            previewScenes={this.props.previewScenes}            
          />
      		<img
            id="imm-exit"
            alt="Close Immersive Explorer"
            src={exit}
            onClick={this.props.close}
            aria-label="Close Immersive Explorer"
            tabIndex="1"            
          />
        </div>
      );
  }

}

export default ImmersiveControls;