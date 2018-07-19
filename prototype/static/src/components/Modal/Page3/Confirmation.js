import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';


import RequestSuccess from '../Page4/RequestSuccess.js';

const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};



class Confirmation extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 3,
          product_id: this.props.product_id,
          accommodation_name: this.props.accommodation_name,
          accommodation_description: this.props.accommodation_description
      };
  }

  clickSubmit = () => {
    var items = localStorage.getItem("accommodation_requests");
    if (items == null) {
        items = [];
    }
    else {
        items = JSON.parse(items);

    }

    items.push({
      product_id: this.state.product_id,
      accommodation_name: this.state.accommodation_name,
      accommodation_description: this.props.accommodation_description
    });

    localStorage.setItem("accommodation_requests", JSON.stringify(items));

    this.setState({
      showPage : 4
    });
}

    render() {
      const isThirdPage = this.state.showPage === 3
      return (
        <div>
        {isThirdPage
          ?
            <Grid>
            <Row>
            <Col xs={12} md={12}>
              <h3 className="confirmation_heading"><span>1</span>Confirm Accommodation(s)</h3>
            </Col>

            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h3>{this.state.accommodation_name}</h3>
                <p className="modal_text">{this.state.accommodation_description}</p>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h3 className="confirmation_heading"><span>2</span>Confirm Date & Location</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <p>Onsite Interview Date</p>
                <p className="modal_text_emphasized">August 6, 2018</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <p>Onsite Interview Location</p>
                <p className="modal_text_emphasized">731 Lexington Avenue, New York</p>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h3 className="confirmation_heading"><span>3</span>Send Message</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <p>*Please provide us with additional details about your request.</p>
                <textarea rows="4" cols="50" name="specification" placeholder="Enter details here." required></textarea>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4}>
                <Button bsSize="small" block>Cancel</Button>
              </Col>
              <Col xs={4} md={4}>
                <Button onClick={this.clickSubmit} bsSize="small" block>Submit</Button>
              </Col>
            </Row>
           </Grid>
          :
          <RequestSuccess product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description}/>
        }
        </div>
    );
  }
}


export default Confirmation;
