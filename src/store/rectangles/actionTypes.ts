import {Timestamp} from "../../types/timestampTypes";

export const SET_RECTANGLES = 'rectanglesActionTypes/SET_TIMESTAMPS'
export interface SetRectanglesAction {
    type: typeof SET_RECTANGLES
    rectangles: Timestamp[]
}

export type RectanglesAction =
    SetRectanglesAction