import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { Grid, Row, Col, Glyphicon,ButtonToolbar, Button } from 'react-bootstrap';

import RequestList from './RequestList.js';


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
class Requests extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div>My Requests > Current Requests</div>
        </Col>
      </Row>
        <Row>
          <Col xs={12} md={12}>
            <h1>Current Requests</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={1} md={1}></Col>
          <Col xs={2} md={2}>
            <div>Accommodation</div>
          </Col>
          <Col xs={2} md={2}>
            <div>Interview Date</div>
          </Col>
          <Col xs={2} md={2}>
            <div>Interview Stage</div>
          </Col>
          <Col xs={2} md={2}>
            <div>Location</div>
          </Col>
          <Col xs={2} md={2}>
            <div>Status</div>
          </Col>
          <Col xs={1} md={1}></Col>
        </Row>
        <RequestList />
        
      </Grid>
    );
  }
}

export default Requests;
