import { combineReducers } from 'redux';
import contentGeneration from './contentGeneration';
import tagsGeneration from './tagsGeneration';
import font from './font'

const appReducer = combineReducers({
	contentGeneration,
	tagsGeneration,
	font
});

export default appReducer;