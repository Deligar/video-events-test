import React, {SyntheticEvent, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './VideoEventsPage.css'
import VideoWithCanvas from "../containers/VideoWithCanvas/VideoWithCanvas";
import {VIDEO_URL} from "../consts/urls";
import TimestampList from "../containers/TimestampList/TimestampList";
import {Timestamp} from "../types/timestampTypes";
import {getTimestamps} from "../store/timestamps/actions";
import {selectTimestamps} from "../store/timestamps/selectors";
import {setRectangles} from "../store/rectangles/actions";

const VideoEventsPage = () => {
    const dispatch = useDispatch()
    const {timestamps} = useSelector(selectTimestamps)

    useEffect(() => {
        dispatch(getTimestamps())
    }, [dispatch])

    const videoRef = useRef<HTMLVideoElement>(null)

    const onListItemClick = (timestamp: Timestamp) => () => {
        if (videoRef.current) {
            videoRef.current.currentTime = timestamp.timestamp / 1000
        }
    }

    const filterCurrentTimestamps = (time: number, timestamps: Timestamp[] | null) => {
        return timestamps?.filter(ts => (ts.timestamp <= time && time < ts.timestamp + ts.duration))
    }

    const onVideoTimeUpdated = (event: SyntheticEvent<HTMLVideoElement>) => {
        const target = event.target as HTMLVideoElement
        const filteredTimestamps = filterCurrentTimestamps(target.currentTime * 1000, timestamps) || []
        dispatch(setRectangles(filteredTimestamps))
    }

    return (
        <div className={'container'}>
            <div className='left-pane'>
                <VideoWithCanvas
                    ref={videoRef}
                    src={VIDEO_URL}
                    onTimeUpdate={onVideoTimeUpdated}
                />
            </div>
            <div className='right-pane'>
                <TimestampList
                    onListItemClick={onListItemClick}
                />
            </div>
        </div>
    );
};

export default VideoEventsPage;