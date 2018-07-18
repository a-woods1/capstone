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

class RequestList extends Component{



    renderEntry(){
        var requests = JSON.parse(localStorage.getItem("accommodation_requests"));
        console.log(requests)
        console.log(requests.length)
        return Object.entries(requests).map(([key, value], i) => {
          //console.log("i " + i)
          //console.log("key " + key)
          console.log("value " + value.accommodation_name)

          return (
            <Paper style={style}>
              <Grid>
                <Row>
                  <Col xs={1} md={1}>
                    <Glyphicon glyph="chevron-right" />
                  </Col>
                  <Col xs={2} md={2}>
                    <div className="accommodation_name">{value.accommodation_name}</div>
                  </Col>
                  <Col xs={2} md={2}>
                    <span><Glyphicon glyph="calendar"/> August 6, 2018</span>
                  </Col>
                  <Col xs={2} md={2}>
                    <div>Onsite Interview</div>
                  </Col>
                  <Col xs={2} md={2}>
                    <span><Glyphicon glyph="map-marker"/> 731 Lexington Ave.</span>
                  </Col>
                  <Col xs={2} md={2}>
                    <div className="status_tag">Submitted</div>
                  </Col>
                  <Col xs={1} md={1}></Col>
                </Row>
              </Grid>
            </Paper>
        )
     })
}

    render() {
      return (
        <div>
            {this.renderEntry()}
          </div>
    );
  }
}


export default RequestList;
