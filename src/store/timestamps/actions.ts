import {
    FETCH_TIMESTAMPS,
    FETCH_TIMESTAMPS_ERROR,
    FETCH_TIMESTAMPS_SUCCESS,
    FetchTimestampsAction,
    FetchTimestampsErrorAction,
    FetchTimestampsSuccessAction,
    GET_TIMESTAMPS,
    GetTimestampsAction
} from "./actionTypes";
import {Timestamp} from "../../types/timestampTypes";

export const getTimestamps = (): GetTimestampsAction => {
    return {
        type: GET_TIMESTAMPS
    }
}

export const fetchTimestamps = (): FetchTimestampsAction => {
    return {
        type: FETCH_TIMESTAMPS
    }
}

export const fetchTimestampsSuccess = (timestamps: Timestamp[]): FetchTimestampsSuccessAction => {
    return {
        type: FETCH_TIMESTAMPS_SUCCESS,
        timestamps
    }
}

export const fetchTimestampsError = (error: Error | string): FetchTimestampsErrorAction => {
    return {
        type: FETCH_TIMESTAMPS_ERROR,
        error
    }
}