import { combineReducers } from 'redux';
import selectedHeroes from './selectedHeroReducer';

export default combineReducers({
	selectedHeroes,
	images: (state = null) => state
});
