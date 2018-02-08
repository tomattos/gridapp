const tagsGeneration = (state = {}, action) => {
	switch (action.type) {
	case 'TRANSFORM_TAGS':
		return Object.assign ({}, ...state, {
			htmlContent: action.html,
		});
	default:
		return state;
	}
};

export default tagsGeneration;