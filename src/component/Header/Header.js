import React from 'react';
import "./Header.css";
import nflImage from './nfl.gif';

const Header = props => (
	<header>
		<img className="nfl-image" src={nflImage} alt={nflImage} />
		<div className="Header">
			<h1 className="Header-note">Click on every image just once!</h1>
		</div>
	</header>
);

export default Header;