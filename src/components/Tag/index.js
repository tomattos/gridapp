import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({options}) => {

	const { selector, content, children } = options;
	let tag;

	if(selector !== 'ul') {
		tag = React.createElement (
			selector,
			null,
			content
		);
	} else {
		let childrenList = children.map((child, index) => {
			return React.createElement (
				child.selector = 'li',
				{key: index.toString()},
				child.content
			);
		});

		tag = React.createElement (
			selector,
			null,
			childrenList
		);
	}

	return (
		tag
	);
};

Tag.propTypes = {
	selector: PropTypes.string,
	content: PropTypes.string,
	children: PropTypes.arrayOf(
		PropTypes.shape({
			selector: PropTypes.string,
			content: PropTypes.string
		})
	)
};

export default Tag;