import React, { Component } from 'react';
import { previewScenes } from './data/temp-data-util.js';
import ImmersiveNavStagesList from './ImmersiveNavStagesList.js';
import caret from '../img/caret.png';
import pin_white from '../img/pin-white.png';

class ImmersiveNavigator extends Component {

  constructor(props) {
    super(props);
  }

  // TODO: need to figure out if this makes sense
  // for querying the selector
  getDataById(recordId) {
    var record = previewScenes.find(function(previewScene){
      return previewScene.id == recordId;
    });
    return record;
  }

  render () {
      return (
          <div className={"imm-navigator " + (this.props.immersiveNavigatorExpanded ? 'imm-navigator-expanded' : 'imm-navigator-collapsed')}>
            <div className="imm-current-view">
              <span className="kicker">Current View</span>
              <div className="imm-current-view-label">
                <img src={pin_white} role="presentation" />
                <h2 id="dialog-title" tabIndex="0">{this.props.activeViewData.name ? this.props.activeViewData.name : 'Bloomberg Offices'}</h2>
                <p className="sr-only">{this.props.activeViewData.srDescription ? this.props.activeViewData.srDescription : 'No description available for this room.'}</p>
              </div>
            </div>

            <ImmersiveNavStagesList
              activeViewData={this.props.activeViewData}
              changeImmersive={this.props.changeImmersive}            
              stages = {this.props.stages}
              previewScenes={this.props.previewScenes}              
            />

            <div className="toggle" aria-label="Toggle Immersive Panel" onClick={()=>this.props.toggleImmersiveNavigator(!this.props.immersiveNavigatorExpanded)}>
              <img className={(this.props.immersiveNavigatorExpanded ? 'left' : 'right')} src={caret} role="presentation"/>
            </div>  

          </div>
      );
  }

}

export default ImmersiveNavigator;