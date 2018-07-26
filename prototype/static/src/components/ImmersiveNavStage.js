import React, { Component } from 'react';
import ImmersiveNavStagePoiList from './ImmersiveNavStagePoiList.js';
import clock from '../img/clock.png';

class ImmersiveNavStage extends Component {

	constructor(props) {
		super(props);
	}

	render () {
	    return (
			<li
				className={this.props.stageOrder == this.props.expandedStage ? "stage-expanded" : "stage-collapsed"}
				onClick={()=>this.props.expandStage(this.props.stageOrder)}
			>
				<img src={clock} className="clock" />
				<span className="time">{this.props.stageTime}</span>
				<h3>{this.props.stageName}</h3>
				<ImmersiveNavStagePoiList
					kickerLabel="Other Views"
		            activeViewData={this.props.activeViewData}										
	                changeImmersive={this.props.changeImmersive}				
					pois={this.props.pois}
				    previewScenes={this.props.previewScenes}					
				/>
			</li>
	    )
	}
}

export default ImmersiveNavStage;