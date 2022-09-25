import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_PLUS,
  ASYNC_MINUS,
  plusOneAction,
  minusOneAction,
} from './../store/counterReducer'

const delay = (ms) => (
  new Promise(response => setTimeout(response, ms))
);

function* incrementWorker() {
  yield delay(1000);
  yield put(plusOneAction());
};

function* dicrementWorker() {
  yield delay(1000);
  yield put(minusOneAction());
};

export function* counterWatcher() {
  yield takeEvery(ASYNC_PLUS, incrementWorker);
  yield takeEvery(ASYNC_MINUS, dicrementWorker);
};
