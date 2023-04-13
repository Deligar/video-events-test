import {all, fork} from "redux-saga/effects";
import timestampsSaga from "./timestamps/sagas";

export function* rootSaga () {
    yield all([fork(timestampsSaga)])
}