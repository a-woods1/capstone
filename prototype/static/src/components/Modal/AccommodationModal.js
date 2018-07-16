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

import AccommodationList from '../AccommodationList.js';


class AccommodationModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          categories: this.props.products
      };
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
        <Tab eventKey={i+1} title={value.step_title}>
          <AccommodationList />
        </Tab>
      )
    })
  }


  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
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
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            {this.renderEntry()}
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AccommodationModal;
