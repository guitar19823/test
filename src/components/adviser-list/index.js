import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AdviserListItem from '../adviser-list-item';
import { withAdvisersService } from '../hoc';
import { fetchAllAdvisers } from '../../redux/actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './adviser-list.css';

const AdviserList = ({ advisers, filter }) => {
	let arr = advisers;

	if (filter[0] !== '0') {
		arr = arr.filter(({ career_levels }) => {
			return career_levels.join(', ').indexOf(filter[0]) !== -1;
		});
	}

	if (filter[1] !== '0') {
		switch (filter[1]) {
			case '1':
				arr = arr.filter(({ price }) => price < 2000);
				break;
			case '2':
				arr = arr.filter(({ price }) => price >= 2000 && price <= 3000);
				break;
			default:
				arr = arr.filter(({ price }) => price > 3000);
		}
	}

	if (filter[2] !== '0') {
		arr = arr.filter(({ industries }) => {
			return industries.join(', ').indexOf(filter[2]) !== -1;
		});
	}

	if (filter[3] !== '0') {
		arr = arr.filter(({ country }) => country === filter[3]);
	}

	if (arr.length === 0) {
		return <ErrorIndicator />
	}

	return (
		<ul className="adviser-list">
			{
				arr.map((adviser) => {
					return (
						<li key={adviser.id}>
							<AdviserListItem adviser={adviser} />
						</li>
					);
				})
			}
		</ul>
	);
}

class AdviserListContainer extends Component {
	componentDidMount() {
		this.props.fetchAllAdvisers();
	}

	render() {
		const { advisers, loading, error, filter } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return (
			<AdviserList
				advisers={advisers}
				filter={filter}
			/>
		);
	}
}

const mapStateToProps = ({ adviserList: { advisers, loading, error } }) => {
	return { advisers, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { advisersService } = ownProps;

	return bindActionCreators({
		fetchAllAdvisers: fetchAllAdvisers(advisersService)
	}, dispatch);
};

export default compose(
	withAdvisersService(),
	connect(mapStateToProps, mapDispatchToProps)
)(AdviserListContainer);