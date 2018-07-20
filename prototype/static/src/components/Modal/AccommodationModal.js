import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Modal, Button, Tabs, Tab, TabContainer, TabContent, TabPane, Glyphicon } from 'react-bootstrap';

import * as actionCreators from '../../actions/auth';
import accessibility_logo from '../../images/photos/placeholder.png';
import search_icon from '../../images/photos/placeholder.png';

import ItemRequest from './Page2/ItemRequest.js';

const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};

let items = {
    "Equipment" : [{
      "accommodation_name": "Ergonomic Keyboard",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    },
    {
      "accommodation_name": "Ergonomic Mouse",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    },
    {
      "accommodation_name": "Large Computer Monitor",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    },
    {
      "accommodation_name": "Screen-Reader Compatible Computer",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    }
],
    "Environment" : [{
      "accommodation_name": "Elevator All-Floor Access",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    }, {
      "accommodation_name": "Severe Allergies",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    },
{
      "accommodation_name": "Minimize Walking",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    },
{
      "accommodation_name": "Quiet Space",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    }, {
      "accommodation_name": "Height-Adjustable Table/Desk",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    }],
    "Communications" : [{
      "accommodation_name": "Text-to-Speech Software",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    }, {
      "accommodation_name": "Sign-Language Interpreter",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    },
{
      "accommodation_name": "Captions",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    },
{
      "accommodation_name": "Braille Copies",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    }],


    "Policy" : [{
      "accommodation_name": "Use My Own Computer",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    }, {
      "accommodation_name": "Extra Time",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": true
    },
{
      "accommodation_name": "Transportation to Interview",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    },
{
      "accommodation_name": "Service Animal",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    }, {
      "accommodation_name": "Personal Aide",
      "accommodation_description": "Lorem ipsum dolor sit amet",
      "pre_approved": false
    }]

};

class AccommodationModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          categories: this.props.categories,
          showPage: 1
      };
  }



renderEntry = () => {
  let tabs = []

  //Create tabs
  Object.entries(items).forEach(([key, value], i) => {
    let list_items = []
    //Create list items
    Object.entries(value).forEach(([subkey, subvalue]) => {
      console.log(subvalue)
      list_items.push(
        <Grid>
            <Row>
              <Col xs={7} md={7}>
                <span>
                  <h4>{subvalue.accommodation_name}</h4>

                  {Boolean(subvalue.pre_approved)
                      ? <div id="pre_approved">Common Request</div>
                      : <div></div>
                  }

                </span>
                <p>{subvalue.accommodation_description}</p>
              </Col>
              <Col xs={5} md={5}>

                <Button onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>Request</Button>
              </Col>
            </Row>
            {i < items.length && <hr />}
    </Grid>
      )
    })
    //Create tabs and add list items
    tabs.push(
      <Tab eventKey={i+1} title={key}>
      <div>
        {list_items}

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
  return tabs
}

clickRequest = (e, i, accommodation_name, accommodation_description) => {
      this.setState({
          showPage: 2,
          product_id: i,
          accommodation_name: accommodation_name,
          accommodation_description: accommodation_description
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
          <ItemRequest product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} accommodation_description={this.state.accommodation_description}/>
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
