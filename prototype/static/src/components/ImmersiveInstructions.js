import React, { Component } from 'react';
import instructions_mouse from '../images/instructions-mouse.png';
import instructions_arrows from '../images/instructions-arrows.png';
import instructions_esc from '../images/instructions-esc.png';


class ImmersiveInstructions extends Component {

constructor(props) {
	super(props);
}

	render () {
      return (
      	<div id="imm-instructions">
      		<span><img src={instructions_mouse} />Look around with your mouse,</span>
      		<span><img src={instructions_arrows} />or with the arrow keys on your keyboard.</span>
      		<span><img src={instructions_esc} />‘Escape’ closes the 360° view.</span>
      	</div>
  	);
	}

}

export default ImmersiveInstructions;