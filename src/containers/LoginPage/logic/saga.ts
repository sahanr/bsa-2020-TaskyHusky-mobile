import { all, put, takeEvery } from 'redux-saga/effects';
import { logInRequest } from '../../../services/auth.service';
import * as actions from './actions';
import * as actionsTypes from './actionTypes';
import { setToken } from '../../../helpers/jwtToken.helper';
import { ToastAndroid } from 'react-native';

function* fetchLogInUser(action: ReturnType<typeof actions.logInUser>) {
	try {
		const result = yield logInRequest(action.email, action.password);
		setToken(result.jwtToken);
		yield put(actions.logInSuccess({ user: result.user }));
	} catch (err) {
		if (err.status === 401) {
			ToastAndroid.showWithGravity('Invalid email or password', ToastAndroid.LONG, ToastAndroid.TOP);
		} else {
			console.log(err);
		}
	}
}

function* watchLogInUser() {
	yield takeEvery(actionsTypes.LOGIN, fetchLogInUser);
}

export default function* authSaga() {
	yield all([watchLogInUser()]);
}
