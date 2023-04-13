import {Timestamp} from "../../types/timestampTypes";
import {RectanglesAction, SET_RECTANGLES} from "./actionTypes";

export interface RectanglesState {
    rectangles: Timestamp[]
}

const initialState: RectanglesState = {
    rectangles: []
}

export const rectanglesReducer = (state: RectanglesState = initialState, action: RectanglesAction): RectanglesState => {
    switch (action.type) {
        case SET_RECTANGLES:
            return {...state, rectangles: action.rectangles}
        default:
            return state
    }
}