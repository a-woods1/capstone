import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';

import ImmersiveComponent from '../ImmersiveComponent.js';
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
import a11y_blue from '../../images/a11y-blue.png';

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
class Arrival extends React.Component {
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
        let lgClose = () => this.setState({ lgShow: false });
        return (
          <section id="section-arrival">
            <div>
            <ImmersiveComponent />
            <Row>
                <div>Software Engineer > Onsite Interview</div>
            </Row>
            <Row className="arrival_section">
              <ScrollableAnchor id={'section2'}>
                <h1 className="section_title">Arrival</h1>
              </ScrollableAnchor>
            </Row>

            <Row className="overview_details">
                <span className="time"><img src={clock} /> 9:00 a.m.</span>
            </Row>
            <Row className="overview_details">
              <span className="location"><img src={pin} /> 731 Lexington Avenue, New York</span>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Welcome!</h3>
              <p className="info_box_text">We are pleased to welcome you to Bloomberg’s primary NYC office for an interview.</p>
            </Row>
            <Row>
              <h2 className="subsection_title">360 Views</h2>
            </Row>

            <Row>
              <h2 className="subsection_title">What You’ll Do</h2>
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
              <span className="accessibility_link"><img src={a11y_blue} /> Related Accessibility Accommodations <Glyphicon glyph="chevron-right" /></span>
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
                    <span className="accommodation_list_link"><img src={a11y_blue} /> Full Accommodation List</span>
                  </Col>
                  </Row>
              </Grid>
              </div>
            </Row>

            <Row className="info_box">
              <h3 className="info_box_title">Wait for Recruiter</h3>
              <p className="info_box_text">A greeter at the help desk on the 6th floor will point you to the pink couch.</p>
            </Row>

            <Row>
              <h2 className="subsection_title">Additional Details</h2>
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
              <h2 className="subsection_title">About the Space</h2>
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


            <Button
            bsStyle="primary"
            onClick={() => this.setState({ lgShow: true })}
            >
            Launch large demo modal
            </Button>

            <AccommodationModal show={this.state.lgShow} categories={this.props.categories} onHide={lgClose} />

            <hr />
            </div>
        </section>    
        );
    }
}

export default Arrival;
