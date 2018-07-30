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
          show: this.props.show,
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
              showPage : 1,
              modal_screen_title: "Accessibility Accommodations",
          });
      }

    renderPage(param) {
    console.log(this.state.products)
    switch(param) {
      case 1:
        return (<AccommodationModal modal_screen_title={this.state.modal_screen_title} products={this.state.products} />)
      case 2:
        return  (
            <Grid className="item-details">
              <Row>
                <Col xs={12} md={12}>
                        <p>Would you prefer to bring your own {this.state.accommodation_name}? Or do you need us to provide the {this.state.accommodation_name}?</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={12}>
                        <form action="">
                          <label>
                            I will bring my own
                            <input type="radio" name="bring_provide" value=""/>
                            <span className="radio-selector"></span>
                          </label>
                          <label>
                            I want Bloomberg to provide the {this.state.accommodation_name}
                            <input type="radio" name="bring_provide" value="" defaultChecked="true" />
                            <span className="radio-selector"></span>
                          </label>
                        </form>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                        <button>Back to List</button>
                      </Col>
                      <Col xs={6} md={6}>
                        <button onClick={this.clickNext} className="cta">Next</button>
                      </Col>
                    </Row>
                  </Grid>)
      case 3:
        return (<Confirmation show={this.state.show} product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description} bring_provide={this.state.bring_provide} />)
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
