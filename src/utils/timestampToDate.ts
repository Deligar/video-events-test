import {Timestamp} from "../types/timestampTypes";

export const timestampToDate = (timestamp: Timestamp): Date => {
    return new Date(timestamp.timestamp)
}