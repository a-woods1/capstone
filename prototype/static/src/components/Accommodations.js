import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { Grid, Row, Col, Glyphicon,ButtonToolbar, Button } from 'react-bootstrap';

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Accommodations extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
      super(props);

      this.state = {
          product_id: -1,
      };
  }

    
  /*Update the number of items in the cart with the quantity of items selected*/
  updateCart(){
      var product_id = 1
      var quantity = 1
      
      var button = document.getElementById("product_1_button");
      if (button.innerHTML === "Add") {
          //add item
          
          //increment quantity
          var previous_count = document.getElementById('cart_quantity').innerHTML;
          var new_value = parseInt(previous_count, 10) + quantity;
          document.getElementById('cart_quantity').innerHTML = new_value;
          localStorage.setItem('cart_quantity', new_value);
          
          //console.log("product_id " + product_id);
          //console.log("previous_count " + previous_count);
          //console.log("new_value " + new_value)
          
          //add item
          //product_id = 0
          var title = document.getElementById("product_1_title").innerHTML;
          
          //var product_id = parseInt(0, 10);
          //var photo = "./images/products/product_" + product_id + ".png"
          
          var items = localStorage.getItem("cart_items");
          if (items == null) {
              items = [];
          }
          else {
              items = JSON.parse(items);
              
          }
          console.log(product_id)
          console.log(title)
          console.log(quantity)
          items.push({
                     product_id: product_id,
                     title: title,
                     quantity: quantity
                     });
          
          localStorage.setItem('cart_items', JSON.stringify(items));
          button.innerHTML = "Remove";
          
      } else {
          //remove item
          
          //decrement quantity
          var previous_count = document.getElementById('cart_quantity').innerHTML;
          var new_value = parseInt(previous_count, 10) - quantity;
          document.getElementById('cart_quantity').innerHTML = new_value;
          localStorage.setItem('cart_quantity', new_value);
          
          var cart_items = JSON.parse(localStorage.getItem("cart_items"));
          console.log(cart_items)
          for (var i = 0; i < cart_items.length; i++) {
              console.log(cart_items[i])
              var id = cart_items[i].product_id
              console.log(id)
              if(product_id == id){
                  console.log("match!");
                  //var index = cart_items.indexOf(product_id);
                  //if (index > -1) {
                      cart_items.splice(i, 1);
                      console.log("items remaining " + cart_items.length)
                  //}
              }
          }
          localStorage.setItem('cart_items', JSON.stringify(cart_items));
          button.innerHTML = "Add";
      }
      
 
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Accommodations</h1>
          </Col>
        </Row>
        <div id="accommodations_list">
          <hr />
          <Row>
            <Col xs={10} md={10}>
              <h2 id="product_1_title">Accessible Bathroom</h2>
              <p>Reserve an accessible, private bathroom stall.</p>
            </Col>
            <Col xs={2} md={2}>
              <ButtonToolbar>
                <Button id="product_1_button" onClick={this.updateCart} bsSize="large">Add</Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <p>*Please provide a justification for this request.</p>
              <textarea rows="4" cols="50" name="justification" placeholder="Enter justification here." required></textarea>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={10} md={10}>
              <h2 id="product_2">Elevator All-Floor Access</h2>
              <p>Reserve a badge that allows you to stop the elevator at every floor.</p>
            </Col>
            <Col xs={2} md={2}>
              <ButtonToolbar>
                <Button onClick={this.updateCart} bsSize="large">Add</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <ButtonToolbar>
              <Button bsSize="large" block>Back</Button>
            </ButtonToolbar>
          </Col>
          <Col xs={12} md={6}>
            <ButtonToolbar>
              <Button href="/arrival" bsStyle="primary" bsSize="large" block>Submit</Button>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
        </Row>
      </Grid>
    );
  }
}

export default Accommodations;
