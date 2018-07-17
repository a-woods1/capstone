import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
//import './styles/index.css';
//import './styles/cart.css';


const style = {
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    display: 'inline-block',
};



class Confirmation extends Component{
  constructor(props) {
      super(props);

      this.state = {
          showPage: 3
      };
  }

  clickNext = () => {
        this.setState({
            showPage : 4
        });
    }

    render() {
      const isThirdPage = this.state.showPage === 3
      return (
        <div>
        {isThirdPage
          ?
          <div>
          <Button onClick={this.clickNext}>Confirm</Button>
          </div>
          :
          <div>Page 4</div>
        }
        </div>
    );
  }
}


export default Confirmation;
