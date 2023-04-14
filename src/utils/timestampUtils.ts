import {Timestamp} from "../types/timestampTypes";

export const filterCurrentTimestamps = (time: number, timestamps: Timestamp[] | null) => {
    return timestamps?.filter(ts => (ts.timestamp <= time && time < ts.timestamp + ts.duration))
}
