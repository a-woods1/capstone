import React, { Component } from 'react';
import ImmersiveNavStagePoiList from './ImmersiveNavStagePoiList.js';


class SubStageDetail extends Component {

  constructor(props) {
    super(props);
  }

  updateImmersiveView() {
    console.log('updateImmersiveView called');
  }

  render() {

    return (

      <div className="substage-detail">

        {/*Overview Section*/}
        <section id="ph_section_overview">
        </section>

        {/*Arrival Section*/}
        <section id="ph_section_arrival">
          <div className="ph_poiSelector">
          <ImmersiveNavStagePoiList
                kickerLabel="360 Views"
                activeViewData={this.props.activeViewData}
                changeImmersive={this.props.changeImmersive}
                pois={this.props.stages[0] ? this.props.stages[0].pois : []}
          />
          </div>
        </section>

        {/*One-on-One Interview Section*/}
        <section id="ph_section_one-on-one">
          <div className="ph_poiSelector">
          <ImmersiveNavStagePoiList
                kickerLabel="360 Views"
                activeViewData={this.props.activeViewData}
                changeImmersive={this.props.changeImmersive}
                pois={this.props.stages[1] ? this.props.stages[1].pois : []}
          />
          </div>
        </section>

        {/*Coding Interview Section*/}
        <section id="ph_section_coding">
          <div className="ph_poiSelector">
          <ImmersiveNavStagePoiList
                kickerLabel="360 Views"
                activeViewData={this.props.activeViewData}
                changeImmersive={this.props.changeImmersive}
                pois={this.props.stages[2] ? this.props.stages[2].pois : []}
          />
          </div>
        </section>

      </div>
    );
  }
}

export default SubStageDetail;
