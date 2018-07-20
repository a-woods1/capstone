import React, { Component } from 'react';
import { previewScenes } from './data/temp-data-util.js';
import pin_blue from '../img/pin-blue.png';
import pin_white from '../img/pin-white.png';

class ImmersiveNavStagePoi extends Component {

	constructor(props) {
		super(props);
	}

  	componentDidMount() {
  		this.data = this.getDataById(this.props.id);
  		console.log('this record: ');
  		console.log(this.data);
  		window.setTimeout(function(){
  			this.render();
  		}.bind(this), 1000);
	}


	getDataById(recordId) {
		var record = previewScenes.find(function(previewScene){
			return previewScene.id == recordId;
		});
		return record;
	}

	render () {
		var thumbnailStyle;
		var poiName;
		if(this.data) {
			var thumbnailPath = './textures/thumbnails/' + this.data.id + '.jpg';
			thumbnailStyle = {
				backgroundImage: 'url(' + thumbnailPath + ')',
				backgroundSize: '200%',
				backgroundPosition: 'center'
			}
			poiName = this.data.name;
		} else {
			thumbnailStyle = {
				backgroundImage: 'none'
			}
			poiName = this.props.id;
		}

	    return (
			<li
				className={this.props.activeViewData.id ? (this.props.activeViewData.id == this.props.id ? 'active-poi' : '') : ''}
				onClick={()=>this.props.changeImmersive(this.props.id)}>
				<div
					className="poi-thumbnail"
					// TODO: Look at ImmersiveNavStagePoi for details;
					// currently this is running getDataById at component level rather than
					// simply receiving a record from parent.
					// Somewhat inefficient
					style={thumbnailStyle}>
				</div>
				<div className="poi-label">
					<img src={this.props.activeViewData.id ? (this.props.activeViewData.id == this.props.id ? pin_white : pin_blue) : pin_blue} />
					<h5>{poiName}</h5>
				</div>
			</li>
		)
	}
}

export default ImmersiveNavStagePoi;
