import React from 'react'
import './image.css'

const Image = ({ image }) => {
  const onClick = () => {
    window.open(image.href, '_blank');
  }

  return (
    <div className="image-container">
      <div className="image-subcontainer">
      <div
        onClick={onClick}
        src={image.src}
        alt={image.title}
        className="image-container__image"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="image-container__description">{image.company} "{image.title}" {image.year}</div>
      </div>
    </div>
  )
}

export default Image;