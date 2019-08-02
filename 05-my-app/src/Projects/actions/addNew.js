export function  addNew(newProjectData){
		let action = { type : 'ADD_NEW_PROJECT', payload : newProjectData };
		return action;
	}