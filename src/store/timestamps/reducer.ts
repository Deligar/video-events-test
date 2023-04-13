import {Timestamp} from "../../types/timestampTypes";
import {FETCH_TIMESTAMPS_ERROR, FETCH_TIMESTAMPS_SUCCESS, TimestampsAction} from "./actionTypes";

export interface TimestampState {
    timestamps: Timestamp[],
    error: Error | string
}

const initialState: TimestampState = {
    timestamps: [],
    error: ''
}

export const timestampsReducer = (state: TimestampState = initialState, action: TimestampsAction): TimestampState => {
    switch (action.type) {
        case FETCH_TIMESTAMPS_SUCCESS:
            return {...state, timestamps: action.timestamps}
        case FETCH_TIMESTAMPS_ERROR:
            return {...state, error: action.error}

        default:
            return state
    }
}