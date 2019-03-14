import React from 'react';
import { Link } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';

import './adviser-list-item.css';

const AdviserListItem = ({ adviser }) => {
	const { id, photo, name, industries, career_levels, country, cities, price } = adviser;
	return (
		<ErrorBoundry>
			<div className="adviser-list-item">
				<div className="adviser-cover">
					<img src={photo} alt="cover" />
				</div>
				<div className="adviser-details">
					<div>
						<p className="adviser-name"><b>{name}</b></p>
						<p className="adviser-industries"><b>Отрасли:</b> {industries.join(', ')}</p>
						<p className="adviser-career_levels"><b>Уровень позиции:</b> {career_levels.join(', ')}</p>
						<p className="adviser-country"><b>Локация:</b> {country}</p>
						<p className="adviser-cities"><b>Город:</b> {cities.length !== 0 ? cities.join(', ') : 'Неизвестно'}</p>
					</div>
					<div className="adviser-price"><b>Тариф</b><span>{price} руб / час</span></div>
					<Link to={`/adviser/${id}`}>
						<button className="btn red">карточка консультанта</button>
					</Link>
				</div>
			</div>
		</ErrorBoundry>
	);
};

export default AdviserListItem;