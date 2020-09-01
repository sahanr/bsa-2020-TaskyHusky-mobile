import { createReducer } from '../../../helpers/createReducer.helper';
import { initialState } from './state';
import * as actionTypes from './actionTypes';

export const authReducer = createReducer(initialState, {
	[actionTypes.LOGIN_SUCCESS](state, action: actionTypes.LogInSuccess) {
		return {
			...state,
			user: action.user,
			isAuthorized: Boolean(action.user),
		};
	},
	[actionTypes.LOAD_PROFILE_SUCCESS](state, action: actionTypes.LoadProfileSuccess) {
		return {
			...state,
			user: action.user,
			isAuthorized: Boolean(action.user),
			profileLoaded: true,
		};
	},
});
