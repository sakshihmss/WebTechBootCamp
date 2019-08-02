import bugsReducer from '../BugTracker/reducers/';
import spinnerReducer from '../Spinner/reducer/';
import projectsReducer from '../Projects/reducers/';
import 	{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
	bugs : bugsReducer,
	projects : projectsReducer,
	spinner : spinnerReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;