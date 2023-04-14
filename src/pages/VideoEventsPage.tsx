import React, {SyntheticEvent, useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './VideoEventsPage.css'
import VideoWithCanvas from "../containers/VideoWithCanvas/VideoWithCanvas";
import {VIDEO_URL} from "../consts/urls";
import TimestampList from "../containers/TimestampList/TimestampList";
import {Timestamp} from "../types/timestampTypes";
import {getTimestamps} from "../store/timestamps/actions";
import {selectTimestamps} from "../store/timestamps/selectors";
import {setRectangles} from "../store/rectangles/actions";
import {filterCurrentTimestamps} from "../utils/timestampUtils";
import {MILLISECONDS_IN_SECOND} from "../consts/consts";

const VideoEventsPage = () => {
    const dispatch = useDispatch()
    const {timestamps} = useSelector(selectTimestamps)

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        dispatch(getTimestamps())
    }, [dispatch])

    const onListItemClick = useCallback((timestamp: Timestamp) => () => {
        if (videoRef.current) {
            videoRef.current.currentTime = timestamp.timestamp / MILLISECONDS_IN_SECOND
        }
    }, [])

    const onVideoTimeUpdated = useCallback((event: SyntheticEvent<HTMLVideoElement>) => {
        const target = event.target as HTMLVideoElement
        const filteredTimestamps = filterCurrentTimestamps(target.currentTime * MILLISECONDS_IN_SECOND, timestamps) || []
        dispatch(setRectangles(filteredTimestamps))
    }, [timestamps])

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