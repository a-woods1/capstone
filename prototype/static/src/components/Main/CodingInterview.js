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
class CodingInterview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
      super(props, context);

      this.state = {
        lgShow: false,
  }
}

componentDidMount() {

}

    render() {
        return (
        <section id="section-coding">
          <div>
            <Row>
              <div>Software Engineer > Onsite Interview</div>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section4'}>
                <h1 className="section_title">Coding Interview</h1>
              </ScrollableAnchor>
            </Row>

            <div className="overview_details">
              <Row>
                <span className="time"><img src={clock} />Late Morning</span>
              </Row>
              <Row>
                <span className="location"><img src={pin} /> 731 Lexington Avenue, New York</span>
              </Row>
            </div>            

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
              <span className="accessibility_link"><img src={a11y_blue} /> Related Accessibility Accommodations  <img className="expand" src={expand_blue} /></span>
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
              <span className="accessibility_link"><img src={a11y_blue} /> Related Accessibility Accommodations <img className="expand" src={expand_blue} /></span>
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

export default CodingInterview;
