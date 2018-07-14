import React, { Component } from 'react';
import { Grid, Row, Col, Modal, Button, Tabs, Tab, TabContainer, TabContent, TabPane, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';

import accessibility_logo from '../images/photos/placeholder.png';
import search_icon from '../images/photos/placeholder.png';
//import '../styles/index.css';
//import '../styles/cart.css';

import AccommodationList from './AccommodationList.js';


class AccommodationModal extends React.Component {
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
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="All">
              <AccommodationList />
            </Tab>
            <Tab eventKey={2} title="Visual">
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Auditory">
              Tab 3 content
            </Tab>
            <Tab eventKey={4} title="Speech">
              Tab 4 content
            </Tab>
            <Tab eventKey={5} title="Mobility">
              Tab 5 content
            </Tab>
            <Tab eventKey={6} title="Other">
              Tab 6 content
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AccommodationModal;
