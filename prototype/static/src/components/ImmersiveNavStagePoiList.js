import React, { Component } from 'react';
import ImmersiveNavStagePoi from './ImmersiveNavStagePoi.js';

class ImmersiveNavStagePoiList extends Component {

	constructor(props) {
		super(props);
		this.getPoiData = this.getPoiData.bind(this);
	}

	// when state changes due to 'previewScenes' is populated,
	// you want render to look up to props for that info
	getPoiData( poiId ) {
		if(this.props.previewScenes) {
			var record = this.props.previewScenes.find(function(previewScene){
				return previewScene.id == poiId;
			});
			return record;
		} else {
			return {};
		}
	}

	render () {

        console.log('Rendering ImmersiveNavStagePoiList.js');
        console.log(this.props.stages);
        console.log(this.props.pois);

	    return (

	    	<div className="poi-selector">
		    	<h2 className="kicker">{this.props.kickerLabel}</h2>
				<ul>
					{this.props.pois ?
						this.props.pois.map((poi)=>
						<ImmersiveNavStagePoi
				            activeViewData={this.props.activeViewData}										
			                changeImmersive={this.props.changeImmersive}					
							id={poi}
						    previewScenes={this.props.previewScenes}																		
							// TODO: This POI data is experimental to reduce the number
							// of queries at the POI component level
							thisPoiData={this.getPoiData(poi)}
						/>)
						:
						''}
				</ul>
			</div>
		)
	}
}

export default ImmersiveNavStagePoiList;