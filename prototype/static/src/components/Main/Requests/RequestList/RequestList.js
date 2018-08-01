import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon, PanelGroup, Panel } from 'react-bootstrap';

import expand from '../../../../images/expand.png';
import calendar from '../../../../images/calendar.png';
import pin from '../../../../images/pin.png';
import status_ready from '../../../../images/status-ready.png';
import status_submitted from '../../../../images/status-submitted.png';
import expand_blue from '../../../../images/expand-blue.png';

class RequestList extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  renderEntry() {
    var requests = JSON.parse(localStorage.getItem("accommodation_requests"));
    //console.log(requests)
    //console.log(requests.length)
    if (requests != null){
      return Object.entries(requests).map(([key, value], i) => {
        //console.log("i " + i)
        //console.log("key " + key)
        //console.log("value " + value.accommodation_name)
        return (
          <PanelGroup
            accordion
            id="accordion-controlled-example"
            onSelect={this.handleSelect}
            className="request_list_item"
          >
            <Panel
              eventKey={i}
              role="listitem"
              aria-label={value.accommodation_name}
              >
              <Panel.Heading>
                <Panel.Title toggle>
                <Grid>
                <Row>
                  <Col xs={1} md={1}>
                    <img role="presentation" className="expand" height="25px" src={expand} />
                  </Col>
                  <Col xs={3} md={3}>
                    <div className="accommodation_name">{value.accommodation_name}</div>
                  </Col>
                  <Col xs={2} md={2}>
                    <span><img className="calendar" height="25px" src={calendar} />July 25, 2018</span>
                  </Col>
                  <Col xs={2} md={2}>
                    <div>Onsite Interview</div>
                  </Col>
                  <Col xs={2} md={2}>
                    <span><img className="pin" height="25px" src={pin} />731 Lexington Ave</span>
                  </Col>
                  <Col xs={2} md={2}>
                    <div className="status_tag"><img alt="Status: Submitted" src={status_submitted} height="25px" /></div>
                  </Col>
                </Row>
              </Grid>

                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
              <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <span><strong>Request Type:</strong> {value.bring_provide}</span>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <span><strong>Detailed Information:</strong> {value.request_description}</span>
                </Col>
              </Row>
            </Grid>

              </Panel.Body>
            </Panel>
          </PanelGroup>
        );
      });
    }
  }

/*
    renderEntry(){


          return (
            <div className="request_list_item">
              <Grid>

            </div>
        )
     })
   }
}
*/
    render() {
      return (
        <div>
            {this.renderEntry()}
          </div>
    );
  }
}


export default RequestList;



//render(<RequestList />);
