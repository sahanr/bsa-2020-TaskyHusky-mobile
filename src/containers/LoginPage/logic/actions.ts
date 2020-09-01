import { createAction } from '../../../helpers/createAction';
import * as actionTypes from './actionTypes';

export const logInUser = createAction<actionTypes.LogIn>(actionTypes.LOGIN);
export const logInSuccess = createAction<actionTypes.LogInSuccess>(actionTypes.LOGIN_SUCCESS);
export const loadProfile = createAction(actionTypes.LOAD_PROFILE);
export const loadProfileSuccess = createAction<actionTypes.LoadProfileSuccess>(actionTypes.LOAD_PROFILE_SUCCESS);
