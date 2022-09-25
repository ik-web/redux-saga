import { put, takeEvery, call } from "redux-saga/effects";
import { ASYNC_GET_USERS, getUsers } from '../store/usersReducer';

const fetchUsersFromServer = () => (
  fetch('https://jsonplaceholder.typicode.com/users')
);

function* getUsersWorker() {
  const data = yield call(fetchUsersFromServer);
  const users = yield call(() => new Promise(res => res(data.json())));
  yield put(getUsers(users));
};

export function* userWatcher() {
  yield takeEvery(ASYNC_GET_USERS, getUsersWorker);
};
