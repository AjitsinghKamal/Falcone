import { combineReducers } from 'redux';

function vehiclesReducer(state = [], action) {
	return state;
}
const state = combineReducers({
	vehicles: vehiclesReducer
});

export default state;
