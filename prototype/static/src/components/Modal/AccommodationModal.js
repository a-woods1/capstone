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


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        stages: state.auth.stages,
        steps: state.auth.steps,
        products: state.auth.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


@connect(mapStateToProps, mapDispatchToProps)
class AccommodationModal extends React.Component {

/*
  renderEntry(){
      var num_stages = this.props.products.length
      console.log(num_stages)
      return Object.entries(this.props.products[0]).map(([key, value], i) => {
        //console.log("i " + i)
        var obj = this.props.products[i]
        console.log(obj)
        return (

          <Tab eventKey={1} title={i}>
            <AccommodationList />
          </Tab>

       )
     })
}
*/




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
            <Tab eventKey={1} title="Tab 1">
              <AccommodationList />
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              <AccommodationList />
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              <AccommodationList />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AccommodationModal;
