import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import history from './history';
import { Router } from 'react-router-dom';

import reportWebVitals from './reportWebVitals'

import './assets/styles/global.scss'

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()