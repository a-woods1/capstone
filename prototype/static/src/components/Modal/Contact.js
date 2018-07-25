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
import placeholder from '../../images/photos/placeholder.png';

class Contact extends React.Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <Modal
        {...this.props}
        id="accommodations-modal"
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
         <Grid>
           <Row>
             <Col xs={5} md={5}>
               <img id="a11y_icon" alt="Accessibility icon" src={accessibility_logo} />
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
              <img id="recruiter_photo" alt="Photo of recruiter" width="100px" src={placeholder} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h4 id = "recruiter_name">Jessica Barton</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <span className="time"><Glyphicon glyph="user"></Glyphicon> Engineering Recruiter at Bloomberg</span>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <span className="time"><Glyphicon glyph="envelope"></Glyphicon> jbarton@bloomberg.net</span>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <span className="time"><Glyphicon glyph="phone-alt"></Glyphicon> +1 (212) 555-5555</span>
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
