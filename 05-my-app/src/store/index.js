import bugsReducer from '../BugTracker/reducers/';
import spinnerReducer from '../Spinner/reducer/';
import projectsReducer from '../Projects/reducers/';
import 	{createStore, combineReducers} from 'redux';

let rootReducer = combineReducers({
	bugs : bugsReducer,
	projects : projectsReducer,
	spinner : spinnerReducer
});

let store = createStore(rootReducer);

export default store;