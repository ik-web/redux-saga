import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReduser } from './counterReducer';
import { usersReducer } from './usersReducer';
import { rootWatcher } from './../saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counterReduser,
  usersReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootWatcher);
