import {all, fork, put, takeEvery} from 'redux-saga/effects'

import {fetchTimestamps, fetchTimestampsError, fetchTimestampsSuccess} from "./actions";
import {GET_TIMESTAMPS, GetTimestampsAction} from "./actionTypes";
import {fetchTimestampsService} from "./services";


function* onLoadTimestamps({}: GetTimestampsAction) {
    try {
        yield put(fetchTimestamps());
        const {data} = yield fetchTimestampsService();
        const result = [...data].sort((prev, curr) => prev.timestamp - curr.timestamp)
        yield put(fetchTimestampsSuccess(result));
    } catch (error) {
        if (error instanceof Error || typeof error === 'string') {
            yield put(fetchTimestampsError(error))
        }
    }
}

function* watchOnLoadTimestamps() {
    yield takeEvery(GET_TIMESTAMPS, onLoadTimestamps);
}

export default function* timestampsSaga() {
    yield all([fork(watchOnLoadTimestamps)]);
}