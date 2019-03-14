import React, { Component, Fragment } from 'react';

import Filter from '../filter';
import AdviserListContainer from '../adviser-list';

export default class HomePage extends Component {
	state = {
		filter: ['0', '0', '0', '0']
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const elements = e.target.elements;
		const values = [];

		for (let i = 0; i < elements.length - 1; i++) {
			values.push(elements[i].value);
		}

		this.setState({
			filter: values
		});
	};

	render() {
		return (
			<Fragment>
				<Filter handleSubmit={this.handleSubmit} />
				<AdviserListContainer filter={this.state.filter}/>
			</Fragment>
		);
	}
};