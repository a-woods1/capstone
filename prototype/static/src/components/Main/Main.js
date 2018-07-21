import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';

import Overview from './Overview.js';
import Arrival from './Arrival';
import InPersonInterview from './InPersonInterview';
import CodingInterview from './CodingInterview';
import SubStageDetail from '../SubstageDetail.js';
import ThreeContainer from '../ThreeContainer.js';
import { threeEntryPoint } from '../threejs/threeEntryPoint';
import { previewScenes } from '../data/temp-data-util.js';
import { stages } from '../data/stages.js';

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

    // TODO: Placeholder, To delete after testing
    ph_topHeader() {
      return(
        <div className="ph_topHeader">
          <span onClick={this.hideImmersive.bind(this)}>B</span>
        </div>
      );
    }


  render() {
    return (
      <div>
        <Grid>
          <Overview />
          <Arrival />
          <InPersonInterview />
          <CodingInterview />
        </Grid>
      </div>
      );
    }
}

export default Main;