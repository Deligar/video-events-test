import React, {SyntheticEvent, useRef, useState} from 'react';
import './VideoEventsPage.css'
import VideoWithCanvas from "../containers/VideoWithCanvas/VideoWithCanvas";
import {TIMESTAMPS_URL, VIDEO_URL} from "../consts/urls";
import TimestampList from "../containers/TimestampList/TimestampList";
import {useGetTimestamps} from "../hooks/useGetTimestamps";
import {TimeStampType} from "../types/timestampTypes";

const VideoEventsPage = () => {
    const timestamps = useGetTimestamps(TIMESTAMPS_URL)
    const videoRef = useRef<HTMLVideoElement>(null)

    const [rectangles, setRectangles] = useState<TimeStampType[]>([])

    const onListItemClick = (timestamp: TimeStampType) => () => {
        if (videoRef.current) {
            videoRef.current.currentTime = timestamp.timestamp / 1000
        }
    }

    const filterCurrentTimestamps = (time: number, timestamps: TimeStampType[] | null) => {
        return timestamps?.filter(ts => (ts.timestamp <= time && time < ts.timestamp + ts.duration))
    }

    const onVideoTimeUpdated = (event: SyntheticEvent<HTMLVideoElement>) => {
        const target = event.target as HTMLVideoElement
        setRectangles(filterCurrentTimestamps(target.currentTime * 1000, timestamps) || [])
    }

    return (
        <div className={'container'}>
            <div className='left-pane'>
                <VideoWithCanvas
                    ref={videoRef}
                    src={VIDEO_URL}
                    rectangles={rectangles}
                    onTimeUpdate={onVideoTimeUpdated}
                />
            </div>
            <div className='right-pane'>
                <TimestampList
                    timestamps={timestamps}
                    onListItemClick={onListItemClick}
                />
            </div>
        </div>
    );
};

export default VideoEventsPage;