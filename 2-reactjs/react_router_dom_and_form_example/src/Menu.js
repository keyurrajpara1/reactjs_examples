import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
const Menu = () => {
	return (
		<div className="menuStyle">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/Contact">Contact</Link></li>
			</ul>
		</div>
	);
}
export default Menu;