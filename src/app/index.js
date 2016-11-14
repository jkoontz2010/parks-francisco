import React from  'react';
import {render } from 'react-dom';

// import CSS

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.style.scss';

// import components
import App from './components/App';

import LandingPage from './components/LandingPage';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={LandingPage} />
				<Route path="/spot/:location" component={PhotoGrid} />
			</Route>
		</Router>
	</Provider>

);

render(router, document.getElementById('root'));


