import {TimeStampType} from "../types/timestampTypes";
import {useEffect, useState} from "react";

export const useGetTimestamps = (url: string): TimeStampType[] | null => {
    const [timestamps, setTimestamps] = useState<null | TimeStampType[]>(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data: TimeStampType[]) => {
                data.sort((prev, curr) => prev.timestamp - curr.timestamp)
                setTimestamps(data)
            })
    }, [url])

    return timestamps
}