import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withAdvisersService } from '../hoc';
import { fetchAdviser } from '../../redux/actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './adviser.css';

const Adviser = ({ advisers }) => {
	const [{ photo, name, industries, career_levels, country, cities, price }] = advisers;

	return (
		<div className="adviser">
			<div className="adviser-cover">
				<img src={photo} alt="cover" />
			</div>
			<div className="adviser-details">
				<p className="adviser-name"><b>{name}</b></p>
				<p><b>Отрасли:</b> {industries.join(', ')}</p>
				<p><b>Уровень позиции:</b> {career_levels.join(', ')}</p>
				<p><b>Локация:</b> {country}</p>
				<p><b>Город:</b> {cities.length !== 0 ? cities.join(', ') : 'Неизвестно'}</p>
				<div className="adviser-price"><b>Тариф:</b> <span>${price} / час</span></div>
				<div className="adviser-button">
					<Link to="/">
						<button className="btn green">вернуться к списку</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

class AdviserContainer extends Component {
	componentDidMount() {
		this.props.fetchAdviser();
	}

	render() {
		const { advisers, loading, error } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return <Adviser
			advisers={advisers}
		/>
	}
}

const mapStateToProps = ({ adviserList: { advisers, loading, error } }) => {
	return { advisers, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { advisersService, itemId } = ownProps;

	return bindActionCreators({
		fetchAdviser: fetchAdviser(advisersService, itemId)
	}, dispatch);
};

export default compose(
	withAdvisersService(),
	connect(mapStateToProps, mapDispatchToProps)
)(AdviserContainer);