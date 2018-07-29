import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import AccommodationModal from '../AccommodationModal.js';
import Confirmation from '../Page3/Confirmation.js';


class ItemRequest extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 2,
          modal_screen_title: this.props.modal_screen_title,
          products: this.props.products,
          product_id: this.props.product_id,
          accommodation_name: this.props.accommodation_name,
          accommodation_description: this.props.accommodation_description,
          bring_provide: true
      };
  }

  clickNext = () => {
        this.setState({
            showPage : 3,
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
      case 2:
        return  (
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                        <p>Would you prefer to bring your own {this.state.accommodation_name}? Or do you need us to provide the {this.state.accommodation_name}?</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <form action="">
                          <input type="radio" name="bring_provide" value="" /> I will bring my own<br/>
                          <input type="radio" name="bring_provide" value="" defaultChecked="true" /> Please provide a {this.state.accommodation_name}
                        </form>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} md={4}>
                        <Button onClick={this.clickBack} bsSize="small" block>Back to List</Button>
                      </Col>
                      <Col xs={4} md={4}>
                        <Button onClick={this.clickNext} bsSize="small" block>Next</Button>
                      </Col>
                    </Row>
                  </Grid>)
      case 3:
        return (<Confirmation product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description} bring_provide={this.state.bring_provide} />)
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


export default ItemRequest;
