import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/auth';
import { Grid, Row, Col, Glyphicon,ButtonToolbar, Button } from 'react-bootstrap';

import AccommodationModal from '../../Modal/AccommodationModal.js';
import RequestList from './RequestList/RequestList.js';
import contact from '../../../images/contact.png';

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
class Requests extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        lgShow: false,
  }
}


  render() {
    var requests = JSON.parse(localStorage.getItem("accommodation_requests"));
    const hasRequests = requests != null
    console.log("Request Description" + this.state.request_description)

    let lgClose = () => this.setState({ lgShow: false });
    return (
     <div className="container page-view page-requests">
     <div id="requests">
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Current Requests</h1>
          </Col>
        </Row>
        <div className="request-table">
          {hasRequests
          ?
          <Row className="request-table-header">
            <Col xs={1} md={1}></Col>
            <Col xs={3} md={3}>
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
          </Row>
          :
          <div></div>
          }
          <RequestList request_description={this.state.request_description}/>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <div className="contact-recruiter">
              <a onClick={() => this.setState({ lgShow: true })} className="accommodation_list_link"><img src={contact} /> Make a New Request</a>
              <AccommodationModal show={this.state.lgShow} products={this.props.products} onHide={lgClose} />
            </div>
          </Col>
        </Row>
    </Grid>
    </div>
    <div className="requests background-fill"></div>
    </div>
    );
  }
}

export default Requests;
