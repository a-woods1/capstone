import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';

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
class CodingInterview extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <div className="col-md-8">
            <Row>
              <div>Software Engineer > Onsite Interview</div>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section4'}>
                <h1 className="section_title">Coding Interview</h1>
              </ScrollableAnchor>
            </Row>

            <Row className="overview_details">
              <span className="time"><Glyphicon glyph="time" /> Late Morning</span>
            </Row>
            <Row className="overview_details">
              <span className="location"><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">The Coding Interview</h3>
              <p className="info_box_text">Each coding challenge can last up to 60 minutes.</p>
            </Row>
            <Row>
              <h2 className="subsection_title">360 Views</h2>
            </Row>

            <Row>
              <h2 className="subsection_title">What You’ll Do</h2>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Write Code</h3>
              <p className="info_box_text">You can expect to write code with a pen and paper, whiteboard, or computer depending on the team.</p>
              <p>If you anticipate that any of these tasks will be problematic for you, please look over our accessibility accommodations, and let us know if you need anything.</p>
              <span className="accessibility_link"><Glyphicon glyph="time" /> Related Accessibility Accommodations <Glyphicon glyph="chevron-right" /></span>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Demonstrate Proficiency in a Programming Language</h3>
              <p className="info_box_text">We will most likely be testing you in whatever language the job requires, so make sure you’re up to speed. If you have questions regarding which programming languages are required for the role, please contact your recruiter.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">About the Space</h2>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Open Office</h3>
              <p className="info_box_text">Bloomberg has an open-office environment. Every employee sits at a workstation located near teammates to maximize transparency and collaboration.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Transparent Walls</h3>
              <p className="info_box_text">All conference rooms are enclosed in transparent glass.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Navigation</h3>
              <p className="info_box_text">A Bloomberg employee will escort you at all times, so you do not need to know your way around.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Elevators</h3>
              <p className="info_box_text">Our elevators require authorized access to stop at every floor in the building. Please request Elevator All-Floor Access from the accessibility accommodations below if you would prefer to avoid stair climbing. Note that we will never ask you to take more than three flights of stairs.</p>
              <span className="accessibility_link"><Glyphicon glyph="time" /> Related Accessibility Accommodations <Glyphicon glyph="chevron-right" /></span>
              <div className="accommodation-item">
              <Grid>
                <Row>
                  <Col xs={7} md={7}>
                    <h4>Elevator All-Floor Access</h4>
                    <p>This badge allows you to stop the elevator at any floor you need.</p>
                    </Col>
                    <Col xs={5} md={5}>
                      <button className="short-button" onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Select</button>
                    </Col>
                  </Row>
                  <Row>
                  <Col xs={7} md={7}>
                    <span className="accommodation_list_link"><Glyphicon glyph="time" /> Full Accommodation List</span>
                  </Col>
                  </Row>
              </Grid>
              </div>
            </Row>
            <hr />
          </div>
        );
    }
}

export default CodingInterview;