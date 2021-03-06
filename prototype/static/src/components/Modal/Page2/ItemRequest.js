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
          bring_provide: "Please provide this item",
          request_description: "N/A"
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

    handleSelectionChange = (event) => {
      this.setState({
        bring_provide: event.target.value
      });
    }

    renderPage(param) {
    //console.log(this.state.products)
    switch(param) {
      case 1:
        return (<AccommodationModal modal_screen_title={this.state.modal_screen_title} products={this.state.products} />)
      case 2:
        var search_bar = document.getElementById("search")
        search_bar.style.display = "none";
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
                            <input
                            type="radio"
                            name="bring_provide"
                            value="I will bring my own"
                            checked={this.state.bring_provide === "I will bring my own"}
                            onChange={(e) => {this.handleSelectionChange(e)}}
                            />
                            <span className="radio-selector"></span>
                          </label>
                          <label>
                            Please provide this item
                            <input
                            type="radio"
                            name="bring_provide"
                            value="Please provide this item"
                            checked={this.state.bring_provide === "Please provide this item"}
                            onChange={(e) => {this.handleSelectionChange(e)}}
                            defaultChecked="true"
                            />
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
        return (<Confirmation show={this.state.show} product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description} bring_provide={this.state.bring_provide} request_description={this.state.request_description} />)
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
