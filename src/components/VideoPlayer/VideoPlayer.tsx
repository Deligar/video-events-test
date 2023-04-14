import React, {ForwardedRef, memo, SyntheticEvent} from 'react';

interface VideoPlayerProps {
    src: string,
    onTimeUpdate: (event: SyntheticEvent<HTMLVideoElement>) => void,
}

const VideoPlayer = memo(React.forwardRef(({src, onTimeUpdate}: VideoPlayerProps, ref: ForwardedRef<HTMLVideoElement>) => {
    return (
        <div>
            <video
                ref={ref}
                controls
                preload={'auto'}
                style={{width: '100%', height: '100%'}}
                onTimeUpdate={onTimeUpdate}
            >
                <source src={src}/>
            </video>
        </div>
    );
}));

export default VideoPlayer;