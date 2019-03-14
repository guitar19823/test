import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import ErrorIndicator from '../error-indicator';
import { HomePage, AdviserPage } from '../pages';
import './app.css';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Switch>
					<Route
						path="/"
						component={HomePage}
						exact
					/>
					<Route
						path="/adviser/:id"
						render={({ match }) => {
							const { id } = match.params;

							return <AdviserPage itemId={id} />
						}}
					/>
					<Route
						component={ErrorIndicator} 
					/>
				</Switch>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;