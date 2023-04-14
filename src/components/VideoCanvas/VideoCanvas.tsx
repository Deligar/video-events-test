import React, {ForwardedRef, memo} from 'react';
import './VideoCanvas.css'

interface VideoCanvasProps {
    height: number | undefined,
    width: number | undefined
}

const VideoCanvas = memo(React.forwardRef(({height, width}: VideoCanvasProps, ref: ForwardedRef<HTMLCanvasElement>) => {
    return (
        <canvas
            className={'video-canvas'}
            ref={ref}
            height={height}
            width={width}
        />
    );
}));

export default VideoCanvas;