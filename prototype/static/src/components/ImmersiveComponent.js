import React, { Component } from 'react';
import logo from '../img/logo.svg';
import SubStageDetail from './SubstageDetail.js';
import ThreeContainer from './ThreeContainer.js';

class ImmersiveComponent extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return(

      <div>

        <div className="main-content">
          <ThreeContainer
            changeImmersive={this.props.changeImmersive}
            toggleImmersiveNavigator={this.props.toggleImmersiveNavigator}
            setThreeEntryPoint={this.props.setThreeEntryPoint}
            immersiveOpen={this.props.immersiveOpen}
            activeViewId={this.props.activeViewId}
            activeViewData={this.props.activeViewData}
            immersiveNavigatorExpanded={this.props.immersiveNavigatorExpanded}
            hideImmersive={this.props.hideImmersive}
            stages={this.props.stages}
            previewScenes={this.props.previewScenes}
          />
        </div>
      </div>
    );
  }

}

export default ImmersiveComponent;
