import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
//import './styles/index.css';
//import './styles/cart.css';

import Confirmation from './Confirmation.js';

const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};



class ItemRequest extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 2
      };
  }

  clickNext = () => {
        this.setState({
            showPage : 3
        });
    }

    render() {
      const isSecondPage = this.state.showPage === 2
      return (
        <div>
        {isSecondPage
          ?
          <div>
          <Button onClick={this.clickNext}>Request</Button>
          </div>
          :
          <Confirmation />
        }
        </div>
    );
  }
}


export default ItemRequest;
