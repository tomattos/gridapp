import React from 'react';
import ScreenButton from '../ScreenButton';

import './index.css'

const Header = () => (
	<nav className="header">
		<div className="btn-group">
			<ScreenButton>HTML</ScreenButton>
			<ScreenButton>CSS</ScreenButton>
			<ScreenButton>GRID</ScreenButton>
		</div>
	</nav>
);

export default Header;