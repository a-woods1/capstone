import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { Grid, Row, Col, Glyphicon, Alert } from 'react-bootstrap';

import arrival_360 from '../images/photos/placeholder.png';

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Arrival extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
            
        <Alert bsStyle="success">
            <Row><Glyphicon glyph="remove" /></Row>
            <Row>
              <span><Glyphicon glyph="ok-sign" /> You've successfully submitted 2 requests. Check your request status in <strong>My Requests</strong>.</span>
            </Row>
        </Alert>
        <Row className="show-grid">
          <h1>Arrival</h1>
        </Row>
            
        <Row className="show-grid">
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="calendar" /> 8-6-2018</span>
          </Col>
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="time" /> 9:00 AM</span>
          </Col>
          <Col xs={5} md={5}>
            <span><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
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
            
        <div class="info_box">
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
            <Col xs={1} md={11}>
              <h2>Wait for Recruiter</h2>
              <p>Security will direct you to the 6th floor, where a greeter at the help desk will point you to the pink couch.</p>
            </Col>
          </Row>
        </div>
            
        <Row>
          <span><a href="https://www.w3schools.com/html/">Related Accommodations</a> <Glyphicon glyph="menu-down" /></span>
        </Row>
            
        <hr />
            
        <Row className="show-grid">
          <h1>Interview</h1>
        </Row>
            
        <Row className="show-grid">
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="calendar" /> 8-6-2018</span>
          </Col>
          <Col xs={2} md={2}>
            <span><Glyphicon glyph="time" /> 9:30 AM</span>
          </Col>
          <Col xs={5} md={5}>
            <span><Glyphicon glyph="map-marker" /> 731 Lexington Avenue, New York</span>
          </Col>
        </Row>
            
        <Row className="show-grid">
          <img width="650px" height="175px" className="arrival_360" src={arrival_360} alt="Immersive view"/>
        </Row>
      </Grid>
            
        );
    }
}

export default Arrival;
