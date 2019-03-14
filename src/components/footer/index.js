import React from 'react';

import './footer.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<ul>
				<li><a href="/#">Договора-оферты</a></li>
				<li><a href="/#">Реквизиты</a></li>
				<li><a href="/#">Согласие на обработку данных</a></li>
				<li><a href="/#">Политика конфиденциальности</a></li>
			</ul>
			<div className="copy">
				<p>&copy; Copyright {year}.</p>
			</div>
		</footer>
	);
};

export default Footer;