import {Timestamp} from "../../types/timestampTypes";
import {TIMESTAMPS_URL} from "../../consts/urls";
import axios from "axios";

export const fetchTimestampsService = async (): Promise<Timestamp[]> => {
    return await axios.get(TIMESTAMPS_URL);
}