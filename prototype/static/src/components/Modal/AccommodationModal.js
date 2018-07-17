import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col, Modal, Button, Tabs, Tab, TabContainer, TabContent, TabPane, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';

import * as actionCreators from '../../actions/auth';
import accessibility_logo from '../../images/photos/placeholder.png';
import search_icon from '../../images/photos/placeholder.png';
//import '../styles/index.css';
//import '../styles/cart.css';

import ItemRequest from '../ItemRequest.js';

const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};

var items = {
  a: {
    "accommodation_name": "Elevator Access",
    "accommodation_description": "Lorem ipsum dolor sit amet",
    "pre_approved": false
  },
  b: {
    "accommodation_name": "Service Animal",
    "accommodation_description": "consectetur adipiscing elit",
    "pre_approved": true
  }
};

class AccommodationModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          categories: this.props.categories,
          showPage: 1
      };
  }

  renderAccommodationList(){

      return Object.entries(items).map(([key, value], i) => {
        console.log("i " + i)
        console.log("key " + key)
        //console.log("value " + value)
        return (
          <Paper style={style}>
           <Grid id="accommodation_list">
            <Row>
              <Col xs={7} md={7}>
                <span>
                  <h4>{value.accommodation_name}</h4>

                  {value.pre_approved
                      ? <div id="pre_approved">Common Request</div>
                      : <div></div>
                  }

                </span>
                <p>{value.accommodation_description}</p>
              </Col>
              <Col xs={5} md={5}>
                <Button onClick={this.clickRequest}>Request</Button>
              </Col>
            </Row>
            {i < items.length && <hr />}
    </Grid>
    </Paper>
  )
})
}

  renderEntry(){
    //var categories =
    console.log(this.state.categories)
    //var num_stages = this.props.categories.length
    //console.log(num_stages)
    return Object.entries(this.state.categories).map(([key, value], i) => {
      //console.log("i " + i)
      var obj = this.state.categories[i]
      //console.log(obj)
      return (
        <Tab eventKey={i+1} title={value.category_name}>
        <div>
          {this.renderAccommodationList()}

          <Grid>
            <Row>
              <Col xs={1} md={1}>
                  <Glyphicon glyph="plus" />
              </Col>
              <Col xs={11} md={11}>
                <p>Specify your Accommodation</p>
              </Col>
            </Row>
          </Grid>
        </div>
        </Tab>
      )
    })
  }


clickRequest = () => {
      this.setState({
          showPage : 2
      });
  }

  closeModal = () => {
        this.setState({
            showPage : 1
        });
    }

  render() {
    const isFirstPage = this.state.showPage === 1
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton onClick={this.closeModal}>
         <Grid>
           <Row>
             <Col xs={1} md={1}>
               <img id="search_icon" width="20px" height="20px" alt="search icon" src={search_icon}/>
             </Col>
             <Col xs={4} md={4}>
               <h4 id = "modal_screen_title">Accessibility Support</h4>
             </Col>
             <Col xs={7} md={7}>
             <div id="search">
               <input id="search_field" type="text" placeholder="Search Accommodations" />
               <Glyphicon glyph="search" />
             </div>
             </Col>
           </Row>
         </Grid>

        </Modal.Header>
        <Modal.Body>
        <div>
        {isFirstPage
          ?
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            {this.renderEntry()}
          </Tabs>
          :
          <ItemRequest />
        }
        </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AccommodationModal;
