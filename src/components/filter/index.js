import React from 'react';

import AdvisersService from '../../services/advisers-service';
import './filter.css';

const advisersService = new AdvisersService();

const Industries = () => {
	return (
		<select className="industries">
			<option value="0">Отрасль</option>
			{
				advisersService.getAllIndustries().map(({ id, title }) => {
					return (
						<option key={id} value={title}>
							{title}
						</option>
					);
				})
			}
		</select>
	);
};

const Filter = ({ handleSubmit }) => {
	return (
		<form className="filter" onSubmit={handleSubmit}>
			<div className="selects">
				<select className="career_levels">
					<option value="0">Уровень позиции</option>
					<option value="Junior">Junior</option>
					<option value="Middle">Middle</option>
					<option value="Top">Top</option>
				</select>
				<select className="price">
					<option value="0">Цена консультации</option>
					<option value="1">до 2000 руб/час</option>
					<option value="2">от 2000 до 3000 руб/час</option>
					<option value="3">от 3000 руб/час</option>
				</select>
				<Industries />
				<select className="country">
					<option value="0">Страна</option>
					<option value="Россия">Россия</option>
					<option value="Украина">Украина</option>
					<option value="Беларусь">Беларусь</option>
					<option value="Молдова">Молдова</option>
				</select>
			</div>
			<button className="btn blue">применить</button>
		</form>
	);
};

export default Filter;