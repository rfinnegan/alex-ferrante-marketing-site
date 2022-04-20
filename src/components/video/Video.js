import React, { useState } from 'react'
import { mediaService } from '../../services';
import './Video.css';

const Video = ({ video }) => {

  const [height, setHeight] = useState(0);
  const idealAspectRatio = 16.0 / 9.0;
  const resizeThrottleDelayMs = 60;

  const onSizeChanged = (newHeight) => {
    setHeight(newHeight);
  };

  const mediaElementReference = mediaService.handleAspectRatio({ idealAspectRatio, resizeThrottleDelayMs, onSizeChanged });

  const dynamicHeightStyle = {
    height: `${height}px`,
  };

  return (
    <div className="video-container">
      <div className="video-subcontainer">
        <iframe
          className="video-container__iframe"
          src={video.src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ref={mediaElementReference}
          style={dynamicHeightStyle}
        >
        </iframe>
        <div className="video-container_description">
          {video.title} &nbsp; <sup><i>{video.year}</i></sup>
        </div>
        <div className="video-container-positions">
          {video.positions}
        </div>
        {/* <div className="video-about">{shouldShow ? video.about : null}</div> */}
        {/* <button onClick={onShouldShow}>about</button> */}
      </div>
    </div>
  )
}


export default Video