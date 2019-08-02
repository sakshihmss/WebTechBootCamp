import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import * as calc from './calculator';

import  { bindActionCreators } from 'redux';
import appStore from './store';
import BugTracker from './BugTracker';
import Spinner from './Spinner';

import * as spinnerActionCreators from './Spinner/actions';
import ProjectTracker from './Projects';
import {Provider} from 'react-redux';



      
// function renderApp(){
// 	let bugs = appStore.store1.getState();
// 	ReactDOM.render(<BugTracker {...bugActionDispatchers} bugs={bugs}/>,
// 	  document.getElementById('root'));
// }
// renderApp();
// appStore.store1.subscribe(renderApp);

// let actionDispatchers = bindActionCreators(spinnerActionCreators, appStore.store2.dispatch);
// function renderSpinner(){
// 	let spinnerValue = appStore.store2.getState();
// 	ReactDOM.render(<Spinner value={spinnerValue} {...actionDispatchers} />,
// 		document.getElementById('root'));
// }
// renderSpinner();
// appStore.store2.subscribe(renderSpinner);

ReactDOM.render(
	<Provider store={appStore}>
	<div>
		<BugTracker/>
		<hr/>
		<ProjectTracker/>
	</div>
	</Provider>,
	document.getElementById('root'));


//import { add } from './calculator'
//import xyz from './calculator' 

// let add = calc.add;
// // let {add} = calc;
// add(100, 200);
// console.log(calc);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
