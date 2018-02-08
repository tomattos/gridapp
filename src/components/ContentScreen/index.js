import React from 'react';
import ContentEntryFieldContainer from '../../containers/ContentEntryFieldContainer';
import FontEntryFieldContainer from '../../containers/FontEntryFieldContainer';
import './index.css';

const ContentScreen = () => (
	<div className="content-screen">
		<FontEntryFieldContainer />
		<ContentEntryFieldContainer />
	</div>
);

export default ContentScreen;