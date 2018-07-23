import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


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
            <Grid className="confirm-page-content">
            <Row>
            <Col xs={12} md={12}>
              <h3 className="confirmation_heading"><span className="num">1</span><span>Confirm Accommodation(s)</span></h3>
            </Col>

            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h4>{this.state.accommodation_name}</h4>
                <p className="modal_text">{this.state.accommodation_description}</p>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h3 className="confirmation_heading"><span className="num">2</span><span>Confirm Date & Location</span></h3>
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
                <h3 className="confirmation_heading"><span className="num">3</span><span>Send Message</span></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <p>*Please provide us with additional details about your request.</p>
                <textarea rows="4" cols="50" name="specification" placeholder="Enter details here." required></textarea>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <button>Cancel</button>
              </Col>
              <Col xs={6} md={6}>
                <button onClick={this.clickSubmit} className="cta">Submit</button>
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