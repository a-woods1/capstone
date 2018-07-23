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
class Overview extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

console.log("Local Storage:");
for (var i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("Session Storage:");
for (var i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}
        return (
            <div className="col-md-8">
                  <Row>
                      <div>Software Engineer > Onsite Interview</div>
                  </Row>

                  <Row className="overview_section">
                    <ScrollableAnchor id={'section1'}>
                      <h1 className="section_title">Overview</h1>
                    </ScrollableAnchor>
                  </Row>

                  <Row className="overview_details">
                      <span className="date"><Glyphicon glyph="calendar" /> August 6, 2018</span>
                  </Row>
                  <Row className="overview_details">
                    <span className="location"><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
                  </Row>

                  <Row className="info_box">
                    <h3 className="info_box_title">{this.props.userName}:</h3>
                    <p className="info_box_text">Great news! The team enjoyed speaking with you, and would like to invite you to the NYC office for an onsite, in-person interview.</p>
                  </Row>
                  <Row>
                    <h2 className="subsection_title">360 Views</h2>
                  </Row>

                  <Row>
                    <h2 className="subsection_title">Schedule</h2>
                  </Row>
                  <Row className="info_box">
                    <span className="info_box_time"><Glyphicon glyph="time" /> 9:00 a.m.</span>
                    <h3 className="info_box_title">Arrival</h3>
                    <p className="info_box_text">We would like you to arrive and make yourself comfortable at the Bloomberg office by 9 a.m. EDT.</p>
                  </Row>

                  <Row className="info_box">
                    <span className="info_box_time"><Glyphicon glyph="time" /> Early Morning</span>
                    <h3 className="info_box_title">In-Person Interview</h3>
                    <p className="info_box_text">You will have at least one in-person interview during the day with a recruiter.</p>
                  </Row>

                  <Row className="info_box">
                    <span className="info_box_time"><Glyphicon glyph="time" /> Late Morning</span>
                    <h3 className="info_box_title">Coding Interview</h3>
                    <p className="info_box_text">You will have at least one coding interview during the day with a software engineer.</p>
                  </Row>
                  <Row>
                    <h2 className="subsection_title">Tips</h2>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Review Your Interview Details</h3>
                    <p className="info_box_text">The following sections of this website will provide you with more information about what to expect during the onsite interview.</p>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Let Us Know What You Need</h3>
                    <p className="info_box_text">If you require any accommodations to fully participate in the interview, please let us know. We will make every effort to ensure you are provided with appropriate assistance.</p>
                    <span className="accessibility_link"><Glyphicon glyph="time" /> Accessibility Accommodations</span>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Come as You Are</h3>
                    <p className="info_box_text">Engineers at Bloomberg often dress casually. We encourage you to wear whatever make you feel most comfortable, as we will be focused on you knowledge and skills, not your clothing.</p>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Get Excited!</h3>
                    <p className="info_box_text">Bloomberg is a great company, and if you’re a strong engineer, we want you here. Engineering is at the core of our business,
and our work reaches millions of users on a daily basis. There’s a lot of opportunity to have a huge impact, and we want to hire
people who are just as excited about it as we are.</p>
                  </Row>
                  <hr />
            </div>

            <Row className="info_box">
              <h3 className="info_box_title">Hi, {this.props.userName}!</h3>
              <p className="info_box_text">Great news! The team enjoyed speaking with you, and would like to invite you to the NYC office for an onsite, in-person interview.</p>
            </Row>
            <Row>
              <h2 className="subsection_title">360 Views</h2>
            </Row>

            <Row>
              <h2 className="subsection_title">Schedule</h2>
            </Row>
            <Row className="info_box">
              <span className="info_box_time"><img src={clock} /> 9:00 a.m.</span>
              <h3 className="info_box_title">Arrival</h3>
              <p className="info_box_text">We would like you to arrive and make yourself comfortable at the Bloomberg office by 9 a.m. EDT.</p>
            </Row>

            <Row className="info_box">
              <span className="info_box_time"><img src={clock} /> Early Morning</span>
              <h3 className="info_box_title">In-Person Interview</h3>
              <p className="info_box_text">You will have at least one in-person interview during the day with a recruiter.</p>
            </Row>

            <Row className="info_box">
              <span className="info_box_time"><img src={clock} /> Late Morning</span>
              <h3 className="info_box_title">Coding Interview</h3>
              <p className="info_box_text">You will have at least one coding interview during the day with a software engineer.</p>
            </Row>
            <hr />
           </section>
        );
    }
}

export default Overview;
