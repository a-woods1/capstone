import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Modal, Tabs, Tab, TabContainer, TabContent, TabPane, Glyphicon } from 'react-bootstrap';

import * as actionCreators from '../../actions/auth';
import accessibility_logo from '../../images/a11y.png';
import search_icon from '../../images/search.png';
import common_req from '../../images/common-req.png';
import plus from '../../images/plus.png';


import ItemRequest from './Page2/ItemRequest.js';
import Custom from './Page2b/Custom.js';


class AccommodationModal extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          modal_screen_title: "Accessibility Accommodations",
          products: this.props.products,
          showPage: 1
      };
  }


renderEntry = () => {
  let tabs = []

  //Create tabs
  Object.entries(this.state.products).forEach(([key, value], i) => {
    let list_items = []
    //Create list items
    //console.log(key)
    Object.entries(value).forEach(([subkey, subvalue]) => {
      //console.log(subvalue)
      list_items.push(
        <Grid role="listitem" aria-label={subvalue.accommodation_name} className="accommodation-item">
            <Row>
              <Col xs={7} md={7}>
                <span>
                  <h4>{subvalue.accommodation_name}</h4>

                  {Boolean(subvalue.pre_approved)
                      ? <span className="common-req">Common Request</span>
                      : <div></div>
                  }

                </span>
                <p>{subvalue.accommodation_description}</p>
              </Col>
              <Col xs={5} md={5}>

                <button
                  aria-label={"Select " + subvalue.accommodation_name}
                  className="short-button"  
                  onClick={(e) => this.clickRequest(e, i, subvalue.accommodation_name, subvalue.accommodation_description)}>
                  Select
                </button>
              </Col>
            </Row>
    </Grid>
      )
    })
    //Create tabs and add list items
    tabs.push(
      <Tab eventKey={i+1} title={key}>
      <div role="list" aria-label="List of accessibility accommodations">
        {list_items}

        <Grid role="listitem" className="accommodation-item" id="custom-accommodation" onClick={(e) => this.customAccommodation(e)}>
          <Row>
            <Col xs={12} md={12}>
              <img role="presentation" src={plus} className="plus"/>
              <span>I need another accommodation that is not on this list</span>
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
      var title = accommodation_name + " Request";
      this.setState({
          showPage: 2,
          modal_screen_title: title,
          product_id: i,
          accommodation_name: accommodation_name,
          accommodation_description: accommodation_description
      });
  }

  customAccommodation = (e) => {
        var title = "Accommodation Request";
        this.setState({
            showPage: 10,
            modal_screen_title: title,
        });
    }



  closeModal = () => {
        this.setState({
            showPage : 1
        });
    }

  renderSwitch(param){
    switch(param) {
      case 1:
      return(
          <div id="accommodations-list">
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              {this.renderEntry()}
            </Tabs>
          </div>
        )
      case 2:
        return (<ItemRequest products={this.state.products} product_id={this.state.product_id} accommodation_name={this.state.accommodation_name} modal_screen_title={this.state.modal_screen_title}
        accommodation_description={this.state.accommodation_description}/>)
      case 10:
        return (<Custom/>)
      default:
        return 'error';
    }

  }

  render() {
    return (
      <div>
      <Modal
        {...this.props}
        id="accommodations-modal"
        bsSize="large"
        aria-labelledby="modal_screen_title"
      >
        <Modal.Header id="modal_close" closeButton onClick={this.closeModal}>
         <Grid>
           <Row>
             <Col xs={5} md={5}>
               <img role="presentation" id="a11y_icon" src={accessibility_logo} />
               <h4 id="modal_screen_title" aria-live="assertive">{this.state.modal_screen_title}</h4>
             </Col>
             <Col xs={6} md={6}>
             <div id="search">
               <input role="search" id="search_field" type="text" placeholder="Search accommodations" />
               <img className="search_icon" alt="Submit" src={search_icon}/>
             </div>
             </Col>
           </Row>
         </Grid>

        </Modal.Header>
        <Modal.Body>
        <div id="modal-body-main">
        {this.renderSwitch(this.state.showPage)}
        </div>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
}

export default AccommodationModal;
