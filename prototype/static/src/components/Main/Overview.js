import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';

import AccommodationModal from '../Modal/AccommodationModal.js';

import SubStageDetail from '../SubstageDetail.js';
import ThreeContainer from '../ThreeContainer.js';
import { threeEntryPoint } from '../threejs/threeEntryPoint';
import { previewScenes } from '../data/temp-data-util.js';
import { stages } from '../data/stages.js';

import arrival_360 from '../../images/photos/placeholder.png';
import calendar from '../../images/calendar.png';
import clock from '../../images/clock.png';
import pin from '../../images/pin.png';
import pin_blue from '../../images/pin-blue.png';
import a11y_blue from '../../images/a11y-blue.png';
import section_schedule from '../../images/section-schedule.png';
import section_tips from '../../images/section-tips.png';

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
      this.state = {
        lgShow: false,
  }
  this.launchAccModalSetFocus = this.launchAccModalSetFocus.bind(this);
}

  launchAccModalSetFocus() {
    this.setState({ lgShow: true });
    setTimeout(function(){
      document.getElementById('modal_screen_title').focus();
    }, 100)
  }

  componentDidMount() {

  }

    render() {

      let lgClose = () => this.setState({ lgShow: false });

console.log("Local Storage:");
for (var i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("Session Storage:");
for (var i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}
        return (
            <section id="section-overview">
                  <Row>
                        <span aria-label="Interview Date" tabIndex="0" className="date">
                          <span className="month">Jul</span>
                          <span className="num">28</span>
                          <span className="day">Wednesday</span>
                        </span>
                  </Row>

                  <Row className="overview_section">
                    <ScrollableAnchor id={'section1'}>
                      <h1 className="section_title" onClick={this.props.testFunction}>Overview</h1>
                    </ScrollableAnchor>
                  </Row>

                  <div className="overview_details">
                    <Row>
                      <span className="location"><img src={pin_blue} /> 731 Lexington Avenue, New York</span>
                    </Row>
                  </div>

                  <Row className="welcome_message info_box">
                    <p className="info_box_text">Hi {this.props.userName}!<br/>The team enjoyed speaking with you, and would like to invite you to the NYC office for an onsite, in-person interview.</p>
                  </Row>

                  <div className="schedule">
                    <Row>
                      <h2 className="subsection_title">
                        <img src={section_schedule} />
                        Schedule
                      </h2>
                    </Row>
                    <Row className="info_box">
                      <span className="info_box_time"><img src={clock} />9:00<span className="am-pm">AM</span></span>
                      <h3 className="info_box_title">Arrival</h3>
                      <p className="info_box_text">We would like you to arrive and make yourself comfortable at the Bloomberg office by 9 a.m. EDT.</p>
                    </Row>

                    <Row className="info_box">
                      <span className="info_box_time"><img src={clock} />9:30<span className="am-pm">AM</span></span>
                      <h3 className="info_box_title">In-Person Interview</h3>
                      <p className="info_box_text">You will have at least one in-person interview during the day with a recruiter.</p>
                    </Row>

                    <Row className="info_box">
                      <span className="info_box_time"><img src={clock} />10:30<span className="am-pm">AM</span></span>
                      <h3 className="info_box_title">Coding Interview</h3>
                      <p className="info_box_text">You will have at least one coding interview during the day with a software engineer.</p>
                    </Row>

                  </div>

                  <Row className="tips">
                  <h2 className="subsection_title">
                    <img src={section_tips} />
                    Tips
                  </h2>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Review Your Interview Details</h3>
                    <p className="info_box_text">The following sections of this website will provide you with more information about what to expect during the onsite interview.</p>
                  </Row>
                  <Row className="info_box">
                    <h3 className="info_box_title">Let Us Know What You Need</h3>
                    <p className="info_box_text">If you require any accommodations to fully participate in the interview, please let us know. We will make every effort to ensure you are provided with appropriate assistance.</p>
                    <a onClick={this.launchAccModalSetFocus} className="accessibility_link"><img src={a11y_blue} /> Accessibility Accommodations</a>


                    <AccommodationModal show={this.state.lgShow} categories={this.props.categories} products={this.props.products} onHide={lgClose} />

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
            </section>
        );
    }
}

export default Overview;
