import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import './index.css';

const HtmlScreen = ({content = []}) => {
	const htmlList = content.map ((item, index) => {
		return <Tag key={index.toString()} options={item} />;
	});

	return (
		<div className="html-screen">
			{htmlList}
		</div>
	);
};

HtmlScreen.propTypes = {
	content: PropTypes.array
};

export default HtmlScreen;
