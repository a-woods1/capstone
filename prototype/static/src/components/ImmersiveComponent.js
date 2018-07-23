import React, { Component } from 'react';
import logo from '../img/logo.svg';
import SubStageDetail from './SubstageDetail.js';
import ThreeContainer from './ThreeContainer.js';
import { threeEntryPoint } from './threejs/threeEntryPoint';
import { previewScenes } from './data/temp-data-util.js';
import { stages } from './data/stages.js';
import './css/App.scss';
import './css/Placeholder.scss';

class ImmersiveComponent extends Component {

  constructor(props) {
    super(props);

    this.threeEntryPoint;
    this.state = {
      immersiveOpen : false,
      previewScenes : previewScenes,
      activeViewId : 'g-58th-ext-3',
      activeViewData: '',
      immersiveNavigatorExpanded: true,
      stages : stages
    }

    this.changeImmersive = this.changeImmersive.bind(this);
    this.toggleImmersiveNavigator = this.toggleImmersiveNavigator.bind(this);

  }

  componentDidMount() {

    var s = { stages };
    var p = { previewScenes };
    // console.log('app js loaded stages');
    // console.log(s);

    this.setState({
      previewScenes: previewScenes,
      stages: stages
    });

  }


  getDataById(recordId) {
    var record = previewScenes.find(function(previewScene){
      return previewScene.id == recordId;
    });
    return record;
  }

  setThreeEntryPoint ( instance ) {
    this.threeEntryPoint = instance;
  }

  toggleImmersiveNavigator ( expand ) {

    if(expand) {
     this.setState({immersiveNavigatorExpanded: true});
    } else {
     this.setState({immersiveNavigatorExpanded: false});
    }

  }

  // Switches the photosphere visible in the immersive view
  changeImmersive ( ) {

    // update the view in threeEntryPoint
    this.threeEntryPoint.changeView( this.state.activeViewId );

    // update the current data on record
    var dataRecord = this.getDataById(this.state.activeViewId);
    // console.log('App.js got data record');
    // console.log(dataRecord);

    this.setState({
      activeViewData: dataRecord
    }, function() {
      console.log('App.js set state for data record');
      console.log(dataRecord);
    });

  }

  hideImmersive () {
    // this.threeEntryPoint.updateRenderer();
    this.setState({immersiveOpen : false });
    this.threeEntryPoint.pauseRender();
  }

  showImmersive ( id ) {
    console.log('showImmersiveView called');
    this.setState({
      immersiveOpen : true,
      activeViewId : id
    }, function() {
      this.changeImmersive();
      this.threeEntryPoint.updateRenderer();
      this.threeEntryPoint.resumeRender();
    }.bind(this));
  }


  render() {

    return(

      <div>

        <div className="main-content">

          <SubStageDetail
            changeImmersive={this.showImmersive.bind(this)}
            activeViewData={this.state.activeViewData}
            previewScenes={this.state.previewScenes}
            stages={this.state.stages}
          />
          <ThreeContainer
            changeImmersive={this.showImmersive.bind(this)}
            toggleImmersiveNavigator={this.toggleImmersiveNavigator.bind(this)}
            setThreeEntryPoint={this.setThreeEntryPoint.bind(this)}
            immersiveOpen={this.state.immersiveOpen}
            activeViewId={this.state.activeViewId}
            activeViewData={this.state.activeViewData}
            immersiveNavigatorExpanded={this.state.immersiveNavigatorExpanded}
            hideImmersive={this.hideImmersive.bind(this)}
            stages={this.state.stages}
            previewScenes={this.state.previewScenes}
          />
        </div>
      </div>
    );
  }

}

export default ImmersiveComponent;
