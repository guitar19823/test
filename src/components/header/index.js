import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<div className="logo">Adviser list</div>
			</Link>
		</header>
	);
};

export default Header;