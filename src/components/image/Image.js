import React, { useState } from 'react'
import { mediaService } from '../../services';
import './image.css'

const Image = ({ image }) => {
  const [height, setHeight] = useState(0);
  const idealAspectRatio = 16.0 / 9.0;
  const resizeThrottleDelayMs = 60;

  const onSizeChanged = (newHeight) => {
    setHeight(newHeight);
  };

  const onClick = () => {
    window.open(image.href, '_blank');
  };

  const mediaElementReference = mediaService.handleAspectRatio({ idealAspectRatio, resizeThrottleDelayMs, onSizeChanged });

  const dynamicHeightStyle = {
    height: `${height}px`,
  };

  return (
    <div className="image-container">
      <div className="image-subcontainer">
        <div
          onClick={onClick}
          src={image.src}
          alt={image.title}
          className="image-container__image"
          ref={mediaElementReference}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            ...dynamicHeightStyle,
          }}
        ></div>
        <div className="image-container__description">
          {image.company}- "{image.title}" <sup><i>{image.year}</i></sup>
          <div className="image-container-positions">
            {image.positions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image;