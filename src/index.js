import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import AdvisersService from './services/advisers-service';
import { AdvisersProvider } from './components/advisers-context';

import store from './store';

const advisersService = new AdvisersService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<AdvisersProvider value={advisersService}>
				<Router>
					<App />
				</Router>
			</AdvisersProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);