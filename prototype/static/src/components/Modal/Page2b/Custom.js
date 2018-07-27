import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import AccommodationModal from '../AccommodationModal.js';
import Confirmation from '../Page3/Confirmation.js';


class Custom extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 10,
          product_id: this.props.product_id,
          accommodation_name: this.props.accommodation_name,
          accommodation_description: this.props.accommodation_description,
      };
  }

  clickNext = () => {
        this.setState({
            showPage : 3
        });
    }

    clickBack = () => {
          this.setState({
              showPage : 1
          });
      }

    renderPage(param) {

    switch(param) {
      case 1:
        return (<AccommodationModal />)
      case 10:
        return  (
          <form>
          <FormGroup controlId="formBasicText">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <ControlLabel>Accommodation Title</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.accommodation_name}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <ControlLabel>Accommodation Description</ControlLabel>
                  <p>*Please provide us with additional details about your request.</p>
                  <textarea rows="4" cols="50" id="custom_accommodation_description" name="accommodation_description" placeholder="Enter details here." required></textarea>
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={4}>
                  <Button onClick={this.clickBack} bsSize="small" block>Cancel</Button>
                </Col>
                <Col xs={4} md={4}>
                  <Button onClick={this.clickNext} bsSize="small" block>Next</Button>
                </Col>
              </Row>
            </Grid>
            </FormGroup>
            </form>
          )
      case 3:
        return (<Confirmation product_id={0} accommodation_name={document.getElementById("custom_accommodation_title").value} accommodation_description={document.getElementById("custom_accommodation_description").value}/>)
      default:
        return <div>Error</div>
      }
    }


    render() {

      return (
        <div>
        {this.renderPage(this.state.showPage)}
        </div>
    );
  }
}


export default Custom;
