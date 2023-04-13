import {Timestamp} from "../../types/timestampTypes";

export const GET_TIMESTAMPS = 'timestampsActionTypes/GET_TIMESTAMPS'
export interface GetTimestampsAction {
    type: typeof GET_TIMESTAMPS
}

export const FETCH_TIMESTAMPS = 'timestampsActionTypes/FETCH_TIMESTAMPS'
export interface FetchTimestampsAction {
    type: typeof FETCH_TIMESTAMPS
}

export const FETCH_TIMESTAMPS_SUCCESS = 'timestampsActionTypes/FETCH_TIMESTAMPS_SUCCESS'
export interface FetchTimestampsSuccessAction {
    type: typeof FETCH_TIMESTAMPS_SUCCESS,
    timestamps: Timestamp[]
}

export const FETCH_TIMESTAMPS_ERROR = 'timestampsActionTypes/FETCH_TIMESTAMPS_ERROR'
export interface FetchTimestampsErrorAction {
    type: typeof FETCH_TIMESTAMPS_ERROR,
    error: Error | string
}

export type TimestampsAction =
    GetTimestampsAction |
    FetchTimestampsAction |
    FetchTimestampsSuccessAction |
    FetchTimestampsErrorAction