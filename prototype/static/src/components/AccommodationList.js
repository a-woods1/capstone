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

var items = {
  a: {
    "accommodation_name": "Elevator Access",
    "accommodation_description": "Lorem ipsum dolor sit amet",
    "pre_approved": false
  },
  b: {
    "accommodation_name": "Service Animal",
    "accommodation_description": "consectetur adipiscing elit",
    "pre_approved": true
  }
};

class AccommodationList extends Component{

    renderEntry(){

        return Object.entries(items).map(([key, value], i) => {
          console.log("i " + i)
          console.log("key " + key)
          //console.log("value " + value)
          return (
            <Paper style={style}>
             <Grid id="accommodation_list">
              <Row>
                <Col xs={7} md={7}>
                  <span>
                    <h4>{value.accommodation_name}</h4>

                    {value.pre_approved
                        ? <div id="pre_approved">Common Request</div>
                        : <div></div>
                    }

                  </span>
                  <p>{value.accommodation_description}</p>
                </Col>
                <Col xs={5} md={5}>
                  <Button>Request</Button>
                </Col>
              </Row>
              {i < items.length && <hr />}
      </Grid>
      </Paper>
    )
  })
}

    render() {
      return (
        <div>
          {this.renderEntry()}

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
    );
  }
}


export default AccommodationList;
