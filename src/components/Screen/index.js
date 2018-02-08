import React from 'react';
import ContentScreen from '../ContentScreen';
import CssScreen from '../CssScreen';
import HtmlScreenContainer from '../../containers/HtmlScreenContainer';
import './index.css';

const Screen = () => (
	<div className="screen">
		<ContentScreen />
		<HtmlScreenContainer />
		<CssScreen />
	</div>
);

export default Screen;