const contentGeneration = (state = {}, action) => {
	switch(action.type){
	case 'TRANSFORM_VAL':
		return Object.assign({}, ...state, {content: action.val});
	default:
		return state;
	}
};

export default contentGeneration;