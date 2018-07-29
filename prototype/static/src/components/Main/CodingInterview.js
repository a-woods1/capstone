import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button, PanelGroup, Panel } from 'react-bootstrap';

import AccommodationModal from '../Modal/AccommodationModal.js';
import ImmersiveNavStagePoiList from '../ImmersiveNavStagePoiList.js';

import arrival_360 from '../../images/photos/placeholder.png';
import calendar from '../../images/calendar.png';
import clock from '../../images/clock.png';
import pin_blue from '../../images/pin-blue.png';
import a11y_blue from '../../images/a11y-blue.png';
import new_window from '../../images/new-window.png';
import expand_blue from '../../images/expand-blue.png';
import section_360 from '../../images/section-360.png';
import section_tasks from '../../images/section-tasks.png';
import section_tools from '../../images/section-tools.png';
import section_environment from '../../images/section-environment.png';

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
  this.handleSelect = this.handleSelect.bind(this);
}


handleSelect(activeKey) {
  this.setState({ activeKey });
}

componentDidMount() {

}

    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return (
        <section id="section-coding">
          <div>
            <Row>
                <span className="time"><img src={clock} />10:30<span className="am-pm">AM</span></span>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section4'}>
                <h1 className="section_title">Coding Interview</h1>
              </ScrollableAnchor>
            </Row>

            <div className="overview_details">
              <Row>
                <span className="location"><img src={pin_blue} /> 731 Lexington Avenue, New York</span>
              </Row>
            </div>

            <Row className="info_box">
              <h3 className="info_box_title">The Coding Interview</h3>
              <p className="info_box_text">Each coding challenge can last up to 60 minutes.</p>
            </Row>
            <Row className="immersive_views">
              <h2 className="subsection_title">
                <img src={section_360} />
                360° Tour
              </h2>
              <div>
                <p>The 360° Tours below can give you a sense of the range of rooms we use for coding interviews. If you have questions or requests regarding access to any of these rooms, please feel welcome to contact your recruiter.</p>              
                <p>These tours are accessible to screen readers and keyboard navigation.</p>
                <ImmersiveNavStagePoiList
                  kickerLabel=""
                  activeViewData={this.props.activeViewData}
                  changeImmersive={this.props.changeImmersive}
                  pois={this.props.stagePois[2] ? this.props.stagePois[2].pois : []}
                />
                </div>
            </Row>

            <Row>
              <h2 className="subsection_title">
                <img src={section_tasks} />
                What You’ll Do
              </h2>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Write Code</h3>
              <p className="info_box_text">You can expect to write code with a pen and paper, whiteboard, or computer depending on the team.</p>
              <p className="info_box_text">If you anticipate that any of these tasks will be problematic for you, please look over our accessibility accommodations, and let us know if you need anything.</p>
              <PanelGroup
                accordion
                id="accordion-controlled-example"
                onSelect={this.handleSelect}
              >
                <Panel eventKey={1}>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <span className="accessibility_link"><img src={a11y_blue} /> Related Accessibility Accommodations <img className="expand" src={expand_blue} /></span>

                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                  <div className="accommodation-item">
                    <div className="accommodation-item-details">
                      <h4>Ergonomic Keyboard</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button className="short-button" onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Select</button>
                    </div>
                    <a onClick={() => this.setState({ lgShow: true })} className="accommodation_list_link"><img src={new_window} /> Full Accommodation List</a>
                    <AccommodationModal show={this.state.lgShow} categories={this.props.categories} products={this.props.products} onHide={lgClose} />
                  </div>

                  <div className="accommodation-item">
                    <div className="accommodation-item-details">
                      <h4>Ergonomic Mouse</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button className="short-button" onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Select</button>
                    </div>
                    <a onClick={() => this.setState({ lgShow: true })} className="accommodation_list_link"><img src={new_window} /> Full Accommodation List</a>
                    <AccommodationModal show={this.state.lgShow} categories={this.props.categories} products={this.props.products} onHide={lgClose} />
                  </div>

                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Demonstrate Proficiency in a Programming Language</h3>
              <p className="info_box_text">We will most likely be testing you in whatever language the job requires, so make sure you’re up to speed. If you have questions regarding which programming languages are required for the role, please contact your recruiter.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">
                <img src={section_environment} />
                About the Space
              </h2>
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
              <PanelGroup
                accordion
                id="accordion-controlled-example"
                onSelect={this.handleSelect}
              >
                <Panel eventKey={1}>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <span className="accessibility_link"><img src={a11y_blue} /> Related Accessibility Accommodations <img className="expand" src={expand_blue} /></span>

                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                  <div className="accommodation-item">
                    <div className="accommodation-item-details">
                      <h4>Elevator All-Floor Access</h4>
                      <p>This badge allows you to stop the elevator at any floor you need.</p>
                      <button className="short-button" onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Select</button>
                    </div>
                    <a onClick={() => this.setState({ lgShow: true })} className="accommodation_list_link"><img src={new_window} /> Full Accommodation List</a>
                    <AccommodationModal show={this.state.lgShow} categories={this.props.categories} products={this.props.products} onHide={lgClose} />
                  </div>

                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Row>
          </div>
        </section>
        );
    }
}

export default CodingInterview;
