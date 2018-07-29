import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Modal, Tabs, Tab, TabContainer, TabContent, TabPane, Glyphicon } from 'react-bootstrap';

import * as actionCreators from '../../actions/auth';
import contact_dark from '../../images/contact-dark.png';
import search_icon from '../../images/search.png';
import common_req from '../../images/common-req.png';
import placeholder from '../../images/photos/placeholder.png';

import contact_person from '../../images/contact-person.png';
import contact_email from '../../images/contact-email.png';
import contact_phone from '../../images/contact-phone.png';
import contact_photo from '../../images/contact-photo.png';

class Contact extends React.Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <Modal
        {...this.props}
        id="contact-modal"
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
         <Grid>
           <Row>
             <Col xs={5} md={5}>
               <img id="contact_icon" alt="Contact Recruiter Icon" src={contact_dark} />
               <h4 id = "modal_screen_title">Contact Recruiter</h4>
             </Col>
           </Row>
         </Grid>

        </Modal.Header>
        <Modal.Body>
        <div id="modal-body-main">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <img id="recruiter_photo" alt="Photo of recruiter" width="100px" src={contact_photo} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h4 id = "recruiter_name">Rosa Garcia</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <span className="person">
                <img src={contact_person} />
                Engineering Recruiter at Bloomberg
              </span>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <a className="email" href="mailto:rosa.garcia@bloomberg.net">
                <img src={contact_email} />
                rosa.garcia@bloomberg.net
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <a className="phone">
                <img src={contact_phone} />                            
                +1 (212) 555-5555
              </a>
            </Col>
          </Row>

        </Grid>
        </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Contact;
