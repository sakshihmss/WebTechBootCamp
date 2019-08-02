function projectsReducer(currentState = [], action){
	console.log('projectsReducer triggered');
	if (action.type === 'ADD_NEW_PROJECT')
		return [...currentState, action.payload];
	return currentState;
}

export default projectsReducer;