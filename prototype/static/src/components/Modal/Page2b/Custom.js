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

      handleTitleChange = (event) => {
            this.setState({
                accommodation_name: event.target.value
            });
        }



        handleDescriptionChange = (event) => {
              this.setState({
                  accommodation_description: event.target.value
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

                    <div onClick={() => {this.title.focus()}}>
                    <input
                      type="text"
                      placeholder="Enter title here."
                      ref={(input_title) => this.title = input_title}
                      onChange={(e) => {this.handleTitleChange(e)}}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <ControlLabel>Accommodation Description</ControlLabel>
                  <p>*Please provide us with additional details about your request.</p>
                  <div onClick={() => {this.description.focus()}}>
                    <textarea
                    rows="4"
                    cols="50"
                    id="custom_accommodation_description"
                    name="accommodation_description"
                    placeholder="Enter details here."
                    ref={(input_description) => this.description = input_description}
                    onChange={(e) => {this.handleDescriptionChange(e)}} required></textarea>
                  </div>
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
        return (<Confirmation product_id={0} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description}/>)
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
