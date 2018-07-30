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
  		//console.log('this record: ');
  		//console.log(this.data);
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

		var thumbnails = [
			require( "./textures/g-58th-ext-3.jpg"),
			require("./textures/g-58th-ext-4.jpg"),
			require("./textures/g-58th-desk-2.jpg"),
			require("./textures/g-badge-1.jpg"),
			require("./textures/g-elevator-1.jpg"),
			require("./textures/6-elevator-2.jpg"),
			require("./textures/6-link-15.jpg"),
			require("./textures/6-link-13.jpg"),
			require("./textures/6-link-couch.jpg"),
			require("./textures/6-hall-2.jpg"),
			require("./textures/6-elevator-4.jpg"),
			require("./textures/21wa-ext-1.jpg"),
			require("./textures/21wa-int-1.jpg"),
			require("./textures/21wa-int-3.jpg"),
			require("./textures/21wa-int-4.jpg"),
		];

		var thumbnailStyle;
		var poiName;
		var poiTaskname;
		if(this.data) {
			var thumbnailPath = './textures/thumbnails/' + this.data.id + '.jpg';
			thumbnailStyle = {
				//backgroundImage: 'url(' + thumbnailPath + ')',
        backgroundImage: 'url(' + thumbnails[this.data.thumbnailID] + ')',
				backgroundSize: '200%',
				backgroundPosition: 'center'
			}
			poiName = this.data.name;
			poiTaskname = this.data.taskName;
		} else {
			thumbnailStyle = {
				backgroundImage: 'none'
			}
			poiName = this.props.id;
			poiTaskname = this.props.id;			
		}

	    return (
			<li
				className={this.props.activeViewData.id ? (this.props.activeViewData.id == this.props.id ? 'active-poi' : '') : ''}
				onClick={()=>this.props.changeImmersive(this.props.id)}
				tabIndex="0"
				role="link"
				aria-label={"Select to open immersive view for" + this.data.name}
				>

				<div
					className="poi-thumbnail"
					// TODO: Look at ImmersiveNavStagePoi for details;
					// currently this is running getDataById at component level rather than
					// simply receiving a record from parent.
					// Somewhat inefficient
					style={thumbnailStyle}>
				</div>
				<div className="poi-label">
					<h5>{poiTaskname}</h5>
					<h6>
						<img role="presentation" src={this.props.activeViewData.id ? (this.props.activeViewData.id == this.props.id ? pin_white : pin_blue) : pin_blue} />
						{poiName}
					</h6>					
				</div>
			</li>
		)
	}
}

export default ImmersiveNavStagePoi;
