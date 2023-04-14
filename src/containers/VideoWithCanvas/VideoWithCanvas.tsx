import React, {ForwardedRef, SyntheticEvent, useEffect, useRef, useState} from 'react';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import './VideoWithCanvas.css'
import {drawRect} from "../../utils/drawRect";
import {useSelector} from "react-redux";
import {selectRectangles} from "../../store/rectangles/selectors";
import VideoCanvas from "../../components/VideoCanvas/VideoCanvas";

interface VideoWithCanvasProps {
    src: string,
    onTimeUpdate: (event: SyntheticEvent<HTMLVideoElement>) => void,
}

const VideoWithCanvas = React.forwardRef(({src, onTimeUpdate}: VideoWithCanvasProps,
                                          ref: ForwardedRef<HTMLVideoElement>) => {
    const {rectangles} = useSelector(selectRectangles)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null | undefined>()

    useEffect(() => {
        setCanvasContext(canvasRef.current?.getContext('2d'))
    }, [canvasRef])

    useEffect(() => {
        if (ref && 'current' in ref && ref.current) {
            canvasContext?.clearRect(0, 0, ref.current.clientWidth, ref.current.clientWidth)
            const fractions = {
                height: ref.current.clientHeight / ref.current.videoHeight,
                width: ref.current.clientWidth / ref.current.videoWidth
            }
            rectangles.forEach((timestamp) => {
                drawRect(canvasContext, timestamp.zone, fractions)
            })
        }
    }, [rectangles])


    return (
        <div className={'container'}>
            <VideoPlayer ref={ref} src={src} onTimeUpdate={onTimeUpdate}/>
            <VideoCanvas
                ref={canvasRef}
                height={ref && 'current' in ref ? ref.current?.clientHeight : 0}
                width={ref && 'current' in ref ? ref.current?.clientWidth : 0}
            />
        </div>
    );
});

export default VideoWithCanvas;