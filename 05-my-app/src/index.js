import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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

// import axios from 'axios';

// window['axios'] = axios;

      
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

function Index() {
  return (
    
      <h2>Home</h2>
  );
}

ReactDOM.render(
	<Provider store={appStore}>
	 <Router>
      <div>
        <nav>
        <span>
            &nbsp;<Link to="/">Home</Link>
          </span>
          <span>
            &nbsp;<Link to="/bugs/">BugTracker</Link>
          </span>
          <span>
            &nbsp;<Link to="/projects">Projects</Link>
          </span>
        </nav>
        <Route exact path="/" component={Index} />
        <Route path="/bugs/" component={BugTracker} />
        <Route path="/projects/" component={ProjectTracker} />
      </div>
    </Router>
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
