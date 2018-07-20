import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

import request_success from '../../../images/request-success.png';

class RequestSuccess extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 4,
          product_id: this.props.product_id,
          accommodation_name: this.props.accommodation_name,
          accommodation_description: this.props.accommodation_description,
      };
  }

    render() {
      return (
        <Grid className="request-success">
          <Row>
            <Col xs={12} md={12}>
              <div className="text-center"><img src={request_success}/></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3>Success!</h3>
              <p className="modal_text">You’ve just submitted a request for {this.state.accommodation_name} successfully. We will ensure that your coordinator has an {this.state.accommodation_name} available during the onsite interview. If you have any questions, please reach out to your recruiter.</p>
            </Col>
          </Row>
            <Row>
              <Col xs={6} md={6}>
                <button>Back</button>
              </Col>
              <Col xs={6} md={6}>
                <button className="cta">Done</button>
              </Col>
            </Row>          
        </Grid>
    );
  }
}


export default RequestSuccess;
