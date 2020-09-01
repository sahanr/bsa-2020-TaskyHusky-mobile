import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(saga));
const persistor = persistStore(store);
saga.run(rootSaga);

const redux = { store, persistor };
export default redux;
