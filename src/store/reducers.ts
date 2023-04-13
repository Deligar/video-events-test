import {combineReducers} from "redux";
import {timestampsReducer} from "./timestamps/reducer";
import {rectanglesReducer} from "./rectangles/reducer";

export const rootReducer = combineReducers({
    timestamps: timestampsReducer,
    rectangles: rectanglesReducer
})

export type RootReducer = ReturnType<typeof rootReducer>