import {Timestamp} from "../types/timestampTypes";

export const timestampToDate = (timestamp: Timestamp): Date => new Date(timestamp.timestamp);