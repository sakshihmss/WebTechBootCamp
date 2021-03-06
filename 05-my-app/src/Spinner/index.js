import React, {Component} from 'react';

class Spinner extends Component{
			state = { delta : 0 };
			render(){
				let { up, down, value } = this.props,
					{ delta } = this.state;
				return(
					<div>
						<input type="number" onChange={ evt => this.setState({delta : evt.target.valueAsNumber})} />
						<br/>
						<input type="button" value="DOWN" onClick={() => down(delta)}/>
						<span> [ {value} ] </span>
						<input type="button" value="UP" onClick={() => up(delta)}/>
					</div>
				)
			}
		}

export default Spinner;