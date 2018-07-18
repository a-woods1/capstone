import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { Grid, Row, Col, Glyphicon,ButtonToolbar, Button } from 'react-bootstrap';

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
class Accommodations extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
      super(props);

      this.state = {
          product_id: -1,
      };
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Accommodations</h1>
          </Col>
        </Row>
        <div id="accommodations_list">
          <hr />
          <Row>
            <Col xs={10} md={10}>
              <h2 id="product_1_title">Accessible Bathroom</h2>
              <p>Reserve an accessible, private bathroom stall.</p>
            </Col>
            <Col xs={2} md={2}>
              <ButtonToolbar>
                <Button id="product_1_button" onClick={this.updateCart} bsSize="large">Add</Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>*Please provide a justification for this request.</p>
              <textarea rows="4" cols="50" name="justification" placeholder="Enter justification here." required></textarea>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={10} md={10}>
              <h2 id="product_2">Elevator All-Floor Access</h2>
              <p>Reserve a badge that allows you to stop the elevator at every floor.</p>
            </Col>
            <Col xs={2} md={2}>
              <ButtonToolbar>
                <Button bsSize="large">Add</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <ButtonToolbar>
              <Button bsSize="large" block>Back</Button>
            </ButtonToolbar>
          </Col>
          <Col xs={12} md={6}>
            <ButtonToolbar>
              <Button href="/arrival" bsStyle="primary" bsSize="large" block>Submit</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
        </Row>
      </Grid>
    );
  }
}

export default Accommodations;
