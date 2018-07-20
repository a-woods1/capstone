import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

import AccommodationModal from '../Modal/AccommodationModal.js';

import arrival_360 from '../../images/photos/placeholder.png';

import SubStageDetail from '../SubstageDetail.js';
import ThreeContainer from '../ThreeContainer.js';
import { threeEntryPoint } from '../threejs/threeEntryPoint';
import { previewScenes } from '../data/temp-data-util.js';
import { stages } from '../data/stages.js';

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
class Arrival extends Component { // eslint-disable-line react/prefer-stateless-function
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
<div>


<h1>New Section</h1>
      <Grid>
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

        <Row className="arrival_section">
          <ScrollableAnchor id={'section2'}>
            <h1 className="section_title">Arrival</h1>
          </ScrollableAnchor>
        </Row>

        <Row className="arrival_details">
          <Col xs={2} md={2}>
            <span className="time"><Glyphicon glyph="time" /> 9:00 AM</span>
          </Col>
          <Col xs={2} md={2}>
            <span className="date"><Glyphicon glyph="calendar" /> 8-6-2018</span>
          </Col>
          <Col xs={5} md={5}>
            <span className="location"><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
          </Col>
        </Row>

        <Row className="show-grid">
          <img width="650px" height="175px" className="arrival_360" src={arrival_360} alt="Immersive view"/>
        </Row>
        <Row>
          <p>We are pleased to welcome you to Bloomberg’s NY offices for an interview.</p>
        </Row>
        <Row>
          <p>Here is what you should plan to do once you arrive.</p>
        </Row>

        <div className="info_box">
          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="star" />
            </Col>
            <Col xs={11} md={11}>
              <h2>Show your ID</h2>
              <p>You will need to present a valid, government-issued photo ID at reception so we can print your visitor badge.</p>
            </Col>
          </Row>

          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="star" />
            </Col>
            <Col xs={11} md={11}>
              <h2>Wear visitor badge</h2>
              <p>The visitor badge obtained at reception must be worn and visible at all times.</p>
            </Col>
          </Row>

          <Row>
            <Col xs={1} md={1}>
              <Glyphicon glyph="star" />
            </Col>
            <Col xs={11} md={11}>
              <h2>Wait for Recruiter</h2>
              <p>Security will direct you to the 6th floor, where a greeter at the help desk will point you to the pink couch.</p>
            </Col>
          </Row>
        </div>
        <Button
        bsStyle="primary"
        onClick={() => this.setState({ lgShow: true })}
        >
        Launch large demo modal
        </Button>


        <AccommodationModal show={this.state.lgShow} categories={this.props.categories} onHide={lgClose} />
        <Row>
          <span><a href="/accommodations">Related Accommodations</a> <Glyphicon glyph="menu-down" /></span>
        </Row>

        <hr />

        <Row className="show-grid">
        <ScrollableAnchor id={'section3'}>
          <h1>In-Person Interview</h1>
        </ScrollableAnchor>
        </Row>

        <Row className="show-grid">
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="time" /> 9:30 AM</span>
          </Col>
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="calendar" /> 8-6-2018</span>
          </Col>
          <Col xs={5} md={5}>
            <span><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
          </Col>
        </Row>

        <Row className="show-grid">
          <img width="650px" height="175px" className="arrival_360" src={arrival_360} alt="Immersive view"/>
        </Row>
      </Grid>
</div>
        );
    }
}

export default Arrival;
