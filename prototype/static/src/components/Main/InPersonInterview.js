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
import calendar from '../../images/calendar.png';
import clock from '../../images/clock.png';
import pin from '../../images/pin.png';
import a11y_blue from '../../images/a11y-blue.png';
import new_window from '../../images/new-window.png';
import expand_blue from '../../images/expand-blue.png';

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
class InPersonInterview extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <section id="section-interview">  
          <div>
            <Row>
              <div>Software Engineer > Onsite Interview</div>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section3'}>
                <h1 className="section_title">In-Person Interview</h1>
              </ScrollableAnchor>
            </Row>

            <div className="overview_details">
              <Row>
                <span className="time"><img src={clock} />Early Morning</span>
              </Row>
              <Row>
                <span className="location"><img src={pin} /> 731 Lexington Avenue, New York</span>
              </Row>
            </div>

            <Row className="info_box">
              <h3 className="info_box_title">The In-Person Interview</h3>
              <p className="info_box_text">This 30-60 minute interview will consist of a few rounds of technical interviews (most likely) with members of the Engineering team. During the interview we are assessing your thought process
    and problem solving ability as much as anything else, so please talk through your steps as you solve the problem.</p>
            </Row>
            <Row>
              <h2 className="subsection_title">360 Views</h2>
            </Row>

            <Row>
              <h2 className="subsection_title">What You’ll Do</h2>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Share Your Experience</h3>
              <p className="info_box_text">Communicate your interests, previous experience, and goals for the future.</p>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Ask Questions</h3>
              <p className="info_box_text">You will have the opportunity to ask about our company, culture, and projects.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">Additional Details</h2>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">HDMI / Mini VGA</h3>
              <p className="info_box_text">If we ask you to present your screen during the interview, you can connect to our conference room monitor. Keep in mind that our networks limit access to certain websites, so make sure you have any files you want to share saved locally.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Windows Computer</h3>
              <p className="info_box_text">Please be aware that our machines run a managed version of the Windows 10 operating system.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Paper and Pencils</h3>
              <p className="info_box_text">All conference rooms are equipped with notepads and pencils, should you wish to take notes or communicate your ideas through sketches.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Videoconferencing</h3>
              <p className="info_box_text">The conference room monitor, webcam, and speakerphone will be used in cases when a team member needs to join the interview remotely.</p>
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
              <p className="info_box_text">A Bloomberg employee will escort you at all times, so there is no need to know your way around immediately.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Elevators</h3>
              <p className="info_box_text">Our elevators require authorized access to stop at every floor in the building. Please request Elevator All-Floor Access from the accessibility accommodations below if you would prefer to avoid stair climbing. Note that we will never ask you to take more than three flights of stairs.</p>
              <span className="accessibility_link"><img src={a11y_blue} />Related Accessibility Accommodations <img className="expand" src={expand_blue} /></span>
              <div className="accommodation-item">
                <div className="accommodation-item-details">
                  <h4>Elevator All-Floor Access</h4>
                  <p>This badge allows you to stop the elevator at any floor you need.</p>
                  <button className="short-button" onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Select</button>
                </div>
                <span className="accommodation_list_link"><img src={new_window} /> Full Accommodation List</span>
              </div>
            </Row>
          </div> 
        </section>
        );
    }
}

export default InPersonInterview;
