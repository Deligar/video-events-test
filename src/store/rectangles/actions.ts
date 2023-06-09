import {SET_RECTANGLES, SetRectanglesAction} from "./actionTypes";
import {Timestamp} from "../../types/timestampTypes";

export const setRectangles = (rectangles: Timestamp[]): SetRectanglesAction => ({type: SET_RECTANGLES, rectangles});