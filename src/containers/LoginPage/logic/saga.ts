import { all, put, takeEvery, call } from 'redux-saga/effects';
import { logInRequest, getProfileRequest } from '../../../services/auth.service';
import * as actions from './actions';
import * as actionsTypes from './actionTypes';
import { setToken } from '../../../helpers/jwtToken.helper';
import { ToastAndroid } from 'react-native';
import globalNavigate from '../../../navigation';

function* fetchLogInUser(action: ReturnType<typeof actions.logInUser>) {
	try {
		const result = yield call(logInRequest, action.email, action.password);
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

function* fetchLoadProfile() {
	try {
		const result = yield call(getProfileRequest);
		yield put(actions.loadProfileSuccess({ user: result.user }));
	} catch (err) {
		globalNavigate('Login');
	}
}

function* watchLoadProfile() {
	yield takeEvery(actionsTypes.LOAD_PROFILE, fetchLoadProfile);
}

export default function* authSaga() {
	yield all([watchLogInUser(), watchLoadProfile()]);
}
