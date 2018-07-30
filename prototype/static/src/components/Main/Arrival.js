import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button, PanelGroup, Panel} from 'react-bootstrap';

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
      // stages: state.auth.stages,
      steps: state.auth.steps,
      categories: state.auth.categories,
      products: state.auth.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Arrival extends React.Component {
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

        //console.log('Rendering Arrival.js');
        //console.log(this.state.xxxzzz);

        let lgClose = () => this.setState({ lgShow: false });
        return (
          <section id="section-arrival">
            <div>
            <Row>
                <span className="time">9:00<span className="am-pm">am</span></span>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section2'}>
                <h1 tabIndex="0" className="section_title">Arrival</h1>
              </ScrollableAnchor>
            </Row>

            <div className="overview_details">
              <Row>
                <span className="location"><img src={pin_blue} /> 731 Lexington Avenue, New York</span>
              </Row>
            </div>

            <Row className="info_box welcome_message">
              <p className="info_box_text">Welcome!<br/>Bloomberg is an exciting place to be. Here are some things to know for when you arrive at our office:</p>
            </Row>
            <Row className="immersive_views">
              <h2 className="subsection_title">
                <img src={section_360} />
                360° Tour
              </h2>
                <div>
                <p>The 360° tours below can give you a sense of what to expect when you first arrive at the office for your interview.</p>
                <p>These tours are accessible to screen readers and keyboard navigation.</p>
                <ImmersiveNavStagePoiList
                  kickerLabel=""
                  activeViewData={this.props.activeViewData}
                  changeImmersive={this.props.changeImmersive}
                  pois={this.props.stagePois[0] ? this.props.stagePois[0].pois : []}
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
              <h3 className="info_box_title">Show Your ID</h3>
              <p className="info_box_text">You will need to present a valid, government-issued photo ID at reception so we can print your visitor badge.</p>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Wear Visitor Badge</h3>
              <p className="info_box_text">The visitor badge obtained at reception must be worn and visible at all times.</p>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Go to the 6th Floor</h3>
              <p className="info_box_text">All elevators stop on the 6th floor. However, by default, the elevators do not stop on every floor. Please request Elevator All-Floor Access from the accessibility accommodations below if you would prefer to avoid stair climbing. Note that we will never ask you to take more than three flights of stairs.</p>

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
                    <AccommodationModal show={this.state.lgShow} products={this.props.products} onHide={lgClose} />
                  </div>

                  </Panel.Body>
                </Panel>
              </PanelGroup>

            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Wait for Recruiter</h3>
              <p className="info_box_text">A greeter at the help desk on the 6th floor will point you to the pink couch.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">
                <img src={section_tools} />
                Additional Details
              </h2>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Enjoy a Drink or a Snack</h3>
              <p className="info_box_text">Beverages and snacks can be acquired from our pantry while you wait for your recruiter to meet you. Everything is complimentary,
              so please help yourself! Water fountains are located near the men’s and women’s restrooms on every floor: help
              yourself at any time if you need water throughout the day.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Wireless Internet Access</h3>
              <p className="info_box_text">Your visitor badge will contain a username and password to access our guest WiFi network.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">
                <img src={section_environment} />
                About the Space
              </h2>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Entrance</h3>
              <p className="info_box_text">If you prefer to avoid steps, please use the accessible entrance on Lexington Avenue.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Restrooms</h3>
              <p className="info_box_text">All restrooms contain a private, accessible stall. We also have family restrooms available.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Security</h3>
              <p className="info_box_text">Our office is supported by a top-knotch security team. As a guest, security asks that you be accompanied by a Bloomberg employee at all times.</p>
            </Row>
            <Row className="info_box">
              <h3 className="info_box_title">Help Desk</h3>
              <p className="info_box_text">If you need anything, please feel free to approach someone at the help desk on the 6th floor.</p>
            </Row>
            </div>
        </section>
        );
    }
}

export default Arrival;
