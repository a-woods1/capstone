import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
//import './styles/index.css';
//import './styles/cart.css';


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
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <div className="text-center"><Glyphicon glyph="time" /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p className="modal_text">Thank you! Your request has been successfully submitted.</p>
              <p className="modal_text">One of our recruiters will contact you via email within the next few days to follow up on your request.</p>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default RequestSuccess;
