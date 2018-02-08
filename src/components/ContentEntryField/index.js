import React from 'react';
import PropTypes from 'prop-types';

const ContentEntryField = props => {
	let {content, onTextareaChange, onHtmlScreenChange} = props;

	function handlerChange (e) {
		let value = e.target.value;
		let rows = value.split (/\n\n/);

		onTextareaChange (value);

		const htmlObj = rows.map (row => {
			const regExpList = /\[li\]/;
			const regExpEl = /\[\w\d|\w\]/;
			let setSelector = arr => arr.shift ().replace (/\[|\]/g, '');
			let setContent = arr => arr.join (' ');

			switch (true) {
			case regExpList.test (row):
				let list = row.split (/\n/);
				let listItems = [];

				list.forEach (item => {
					let li = item.split (' ');
					let selector = setSelector(li);
					let content = setContent(li);

					listItems.push ({
						selector,
						content,
					});
				});

				return {
					selector: 'ul',
					children: listItems,
				};

			case regExpEl.test (row):
				let item = row.split (' ');
				let selector = setSelector(item);
				let content = setContent(item);

				return {
					selector,
					content,
				};

			default:
				return {
					selector: 'p',
					content: row,
				};
			}
		});

		onHtmlScreenChange (htmlObj);
	}

	return (
		<textarea
			placeholder="Start typing"
			value={content}
			onChange={handlerChange}
		/>
	);
};

ContentEntryField.propTypes = {
	content: PropTypes.string,
	onTextareaChange: PropTypes.func.isRequired,
	onHtmlScreenChange: PropTypes.func.isRequired
};

export default ContentEntryField;
