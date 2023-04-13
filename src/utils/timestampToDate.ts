import {TimeStampType} from "../types/timestampTypes";

export const timestampToDate = (timestamp: TimeStampType): Date => {
    return new Date(timestamp.timestamp)
}