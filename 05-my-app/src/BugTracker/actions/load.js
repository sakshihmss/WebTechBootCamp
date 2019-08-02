import axios from 'axios';

export function load(){
	return function(dispatch){
		axios.get('http://localhost:3030/bugs')
		.then(response => response.data)
		.then(bugs => {
			let action = { type : 'LOAD', payload : bugs};
			dispatch(action);
		});
	}
}

//every .then return a promise.... so, here, we get a promise containing an action.