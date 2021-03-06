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
                <h2
                  id="dialog-title"
                  tabIndex="0"
                  aria-label={this.props.activeViewData.name ? this.props.activeViewData.name : 'Bloomberg Offices'}
                  aria-live="polite"
                >{this.props.activeViewData.taskName ? this.props.activeViewData.taskName : 'Task Name'}</h2>
                <h3><img src={pin_white} />{this.props.activeViewData.name ? this.props.activeViewData.name : 'Stage Name'}</h3>
                <p
                  className="sr-only"
                  aria-live="polite"
                >
                  {this.props.activeViewData.srDescription ? this.props.activeViewData.srDescription : 'No description available for this room.'}
                </p>
              </div>
            </div>

            <ImmersiveNavStagesList
              activeViewData={this.props.activeViewData}
              changeImmersive={this.props.changeImmersive}            
              stages = {this.props.stages}
              previewScenes={this.props.previewScenes}              
            />

            <div className="toggle" aria-label="Toggle Immersive Navigation" tabIndex="0" onClick={()=>this.props.toggleImmersiveNavigator(!this.props.immersiveNavigatorExpanded)}>
              <img role="presentation" className={(this.props.immersiveNavigatorExpanded ? 'left' : 'right')} src={caret}/>
            </div>  

          </div>
      );
  }

}

export default ImmersiveNavigator;