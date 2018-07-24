import React, { Component } from 'react';
import ImmersiveNavStage from './ImmersiveNavStage.js';

class ImmersiveNavStagesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expandedStage : 1
		}
	}

	expandStage( id ) {
		this.setState({
			expandedStage : id
		})
	}

	render () {

		console.log('ImmersiveNavStagesListProps');
		console.log(this.props.stages.items);

      return (

		<ul
			className="imm-stages"
			role="list"
			aria-label="Room descriptions by stage."	
		>

		{this.props.stages.map((item)=>
			<ImmersiveNavStage
				expandStage={this.expandStage.bind(this)}
				activeViewData={this.props.activeViewData}										
	            changeImmersive={this.props.changeImmersive}
	            expandedStage={this.state.expandedStage}
				stageOrder={item.stageOrder}
				stageName={item.stageName}
				stageTime={item.stageTime}
				pois={item.pois}
				previewScenes={this.props.previewScenes}
			/>
		)}

			{/*
			<li className="stage-collapsed">
				<span className="time">Early Morning</span>
				<h3>One-on-One Interviews</h3>
			</li>

			<li className="stage-collapsed">
				<span className="time">Late Morning</span>
				<h3>Coding Interviews</h3>
			</li>
			*/}

		</ul>

    	);
	}
}

export default ImmersiveNavStagesList;