import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';
import { threeEntryPoint } from '../threejs/threeEntryPoint';
import { previewScenes } from '../data/temp-data-util.js';
import { stages } from '../data/stages.js';

import Overview from './Overview.js';
import Arrival from './Arrival';
import InPersonInterview from './InPersonInterview';
import CodingInterview from './CodingInterview';
import SubStageDetail from '../SubstageDetail.js';
import ThreeContainer from '../ThreeContainer.js';
import ImmersiveComponent from '../../components/ImmersiveComponent.js';

import arrival_360 from '../../images/photos/placeholder.png';


function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        stages: state.auth.stages,
        steps: state.auth.steps,
        categories: state.auth.categories,
        products: state.auth.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props, context) {
        super(props, context);

        this.threeEntryPoint;
        this.state = {
          lgShow: false,
          immersiveOpen : false,
          previewScenes : previewScenes,
          activeViewId : 'g-58th-ext-3',
          activeViewData: '',
          immersiveNavigatorExpanded: true,
          stages : stages
    }

    this.navElements = [];
    this.sectionPositions = [];
    this.previouslyActive = 0;


    this.changeImmersive = this.changeImmersive.bind(this);
    this.toggleImmersiveNavigator = this.toggleImmersiveNavigator.bind(this);
    this.oScroll = this.onScroll.bind(this);

    this.testFunction = this.testFunction.bind(this);

  }

  initScroller() {

    // Initialize
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true })

    this.navElements = document.getElementById('sub-nav').getElementsByTagName('li');
    // console.log('xxxx');
    // console.log(this.navElements);

    this.sectionPositions[0] = document.getElementById('section-overview').offsetTop;
    this.sectionPositions[1] = document.getElementById('section-arrival').offsetTop;
    this.sectionPositions[2] = document.getElementById('section-interview').offsetTop;
    this.sectionPositions[3] = document.getElementById('section-coding').offsetTop;


  }

  onScroll(e) {

    //console.log(e);
    var x = document.body.scrollTop;
    // console.log(x);

    // console.log('yyy');
    // console.log(this.sectionPositions);
    // console.log(this.navElements);

    // starting with the last element,


    // remove the active class from all other elements
    for(var i = 0; i < this.navElements.length; i++) {
      this.navElements[i].classList.remove("active");
    }

    for(var i = 0; i < this.navElements.length; i++) {

      // is it the last one in the list?
      if(i != this.navElements.length - 1) {
        if(x >= this.sectionPositions[i] && x < this.sectionPositions[i+1]) {
          this.navElements[i].classList.add("active");
          return;
        }
      } else {
        this.navElements[i].classList.add("active");
      }

    }

  }

  componentWillUnmount() {

    // Add 
    window.removeEventListener('scroll', this.onScroll);

  }

  componentDidMount() {

      this.initScroller();
      window.addEventListener('keydown', this.testFunction);

      var s = { stages };
      var p = { previewScenes };
      // console.log('app js loaded stages');
      // console.log(s);

      this.setState({
        previewScenes: previewScenes,
        stages: stages
      });

      // console.log('XYZ Component (main) did mount');
      // console.log(this.state.stages);

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
        // console.log('App.js set state for data record');
        // console.log(dataRecord);

        // Set ARIA focus
        document.getElementById("ImmersiveControls").focus();

      });

    }

    testFunction(e) {

      // use 'K' to test focus functions
      if(e.keyCode == 75) { 

        var q = document.getElementById("test-focus");
        console.log('trying to focus on ');
        console.log(q);

        setTimeout(function() { q.focus({preventScroll:false}) }, 1);   

      }   

    }

    hideImmersive () {
      // this.threeEntryPoint.updateRenderer();
      console.log('hideImmersive called');
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

    console.log('Rendering Main.js');
    console.log(this.state.stages);

    return (
      <div>
      <ImmersiveComponent
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
      <div id="text-content" className="col-xs-8">
        <Grid>
          <Overview />
          <Arrival
            changeImmersive={this.showImmersive.bind(this)}
            activeViewData={this.state.activeViewData}
            previewScenes={this.state.previewScenes}
            stagePois={this.state.stages}
          />
          <InPersonInterview
            changeImmersive={this.showImmersive.bind(this)}
            activeViewData={this.state.activeViewData}
            previewScenes={this.state.previewScenes}
            stagePois={this.state.stages}
          />
          <CodingInterview
            changeImmersive={this.showImmersive.bind(this)}
            activeViewData={this.state.activeViewData}
            previewScenes={this.state.previewScenes}
            stagePois={this.state.stages}
          />
        </Grid>
      </div>
      </div>
      );
    }
}

export default Main;
