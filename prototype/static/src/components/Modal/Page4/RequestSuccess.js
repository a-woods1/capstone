import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

import request_success from '../../../images/request-success.png';

import AccommodationModal from '../AccommodationModal.js';
import Requests from '../../Main/Requests/Requests.js';

import * as actionCreators from '../../../actions/auth';


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        stages: state.auth.stages,
        steps: state.auth.steps,
        categories: state.auth.categories,
        products: state.auth.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class RequestSuccess extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 4,
          product_id: this.props.product_id,
          accommodation_name: this.props.accommodation_name,
          accommodation_description: this.props.accommodation_description,
      };
  }

  closeModal(){
       document.getElementsByClassName('close')[0].click();
       this.dispatchNewRoute('/requests')
       // document.getElementById('subNav').classList.remove('show');
       // document.getElementById('subNav').classList.add('hide');   
    }

  clickStatus = () => {
        this.closeModal()
        this.setState({
            showPage : 5
        });
    }

  clickBackToList = () => {
        this.setState({
            showPage : 1
        });
    }

  renderPage(param) {
  console.log(param)
  switch(param) {
    case 1:
      return (<AccommodationModal />)
    case 4:
      return  (
        <Grid className="request-success">
          <Row>
            <Col xs={12} md={12}>
              <div className="text-center"><img src={request_success}/></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3>Submitted</h3>
              <p className="modal_text">You’ve successfully submitted a request for the {this.state.accommodation_name}. We will ensure that this item is available during your onsite interview. If you have any questions, please reach out to your recruiting coordinator.</p>
            </Col>
          </Row>
            <Row>
              <Col xs={6} md={6}>
                <button>Back to List</button>
              </Col>
              <Col xs={6} md={6}>
                <button onClick={() => this.closeModal() } className="cta">Check Status</button>
              </Col>
            </Row>
        </Grid>)
        case 5:
          return (<Requests />)
    default:
      return <div>Error</div>
    }
  }

  dispatchNewRoute(route) {
      browserHistory.push(route);
      this.setState({
          open: false,
      });

  }

  render() {

    return (
      <div>
        {this.renderPage(this.state.showPage)}
      </div>
    );
  }
}


export default RequestSuccess;
