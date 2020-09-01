import { all } from 'redux-saga/effects';
import authSaga from '../containers/LoginPage/logic/saga';

function* rootSaga() {
	yield all([authSaga()]);
}

export default rootSaga;
