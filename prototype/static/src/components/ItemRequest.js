import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
//import './styles/index.css';
//import './styles/cart.css';

import Confirmation from './Confirmation.js';

const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};

class ItemRequest extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 2,
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

    render() {
      const isSecondPage = this.state.showPage === 2
      return (
        <div>
        {isSecondPage
          ?
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <p>Would you prefer to bring your own {this.state.accommodation_name}? Or do you need us to provide a {this.state.accommodation_name}?</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="request_selection">
                  <span><Glyphicon glyph="time" />I will bring my own</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="request_selection">
                  <span><Glyphicon glyph="time" />Please provide a {this.state.accommodation_name}</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4}>
                <Button bsSize="small" block>Cancel</Button>
              </Col>
              <Col xs={4} md={4}>
                <Button onClick={this.clickNext} bsSize="small" block>Next</Button>
              </Col>
            </Row>
          </Grid>
          :
          <Confirmation product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description}/>
        }
        </div>
    );
  }
}


export default ItemRequest;
