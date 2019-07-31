let SM = (function(){
	let _currentState = undefined,
	_subscriptionFns = [],
	_reducer = undefined,
	_init_action = '@@INIT_ACTION';

function getState(){
	return _currentState;
}

function subscribe(subscriptionFn){
	_subscriptionFns.push(subscriptionFn);
}

function triggerChange(){
	_subscriptionFns.forEach(subscriptionFn => subscriptionFn());
}

function dispatch(action){
	let newState = _reducer(_currentState, action);
	if(newState === _currentState)
		return;
	_currentState = newState;
	triggerChange();
}

function createStore(reducer){
	_reducer = reducer;
	_currentState = reducer(_currentState, _init_action);
	return {getState, subscribe, dispatch};
}
return {createStore};
})();



