import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { Grid, Row, Col, Glyphicon, Modal, ButtonToolbar, Button, PanelGroup, Panel} from 'react-bootstrap';

import exit from '../img/exit.png';
import ImmersiveNavigator from './ImmersiveNavigator.js';
import ImmersiveInstructions from './ImmersiveInstructions.js';
import a11y_white from '../images/a11y-white.png';

import AccommodationModal from './Modal/AccommodationModal.js';

function mapStateToProps(state) {
    return {
      isRegistering: state.auth.isRegistering,
      registerStatusText: state.auth.registerStatusText,
      token: state.auth.token,
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated,
      // stages: state.auth.stages,
      steps: state.auth.steps,
      categories: state.auth.categories,
      products: state.auth.products,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class ImmersiveControls extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false,
    }
    this.closeOnEsc = this.closeOnEsc.bind(this);

  }



  componentDidMount() {
     window.addEventListener('keydown', this.closeOnEsc);
   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.closeOnEsc);
   }

  closeOnEsc(e) {
     // esc key
    if(e.keyCode == 27) {
      this.props.close();
    }
   }

  render () {
     let lgClose = () => this.setState({ lgShow: false });
      return (
      	<div
          id="ImmersiveControls"
          role="dialog"
          aria-labelledby="dialog-title"
          tabIndex="0"
          aria-live="assertive"
        >
          <div id="imm-shim"></div>
          <ImmersiveInstructions />
          <ImmersiveNavigator
            changeImmersive={this.props.changeImmersive}
            activeViewData={this.props.activeViewData}
            immersiveNavigatorExpanded={this.props.immersiveNavigatorExpanded}
            toggleImmersiveNavigator={this.props.toggleImmersiveNavigator.bind(this)}
            close = {this.props.hideImmersive}
            stages = {this.props.stages}
            previewScenes={this.props.previewScenes}
          />
      		<img
            id="imm-exit"
            alt="Close Immersive Explorer"
            src={exit}
            onClick={this.props.close}
            aria-label="Close Immersive Explorer"
            tabIndex="1"
          />

          <button  onClick={() => this.setState({ lgShow: true })} className="cta">
            <img src={a11y_white} />Accessibility Accommodations
          </button>
          <AccommodationModal show={this.state.lgShow} products={this.props.products} onHide={lgClose} />
        </div>
      );
  }

}

export default ImmersiveControls;
