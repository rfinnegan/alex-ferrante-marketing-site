import React from 'react'
import './image.css'

const Image = ({ image }) => {

  const onOverlayClick = (event) => {
    event.stopPropagation();
    // event.preventDefault();
    console.log(event.target.parentElement.parentElement.children[0].children[0].children[0]);
    event.target.parentElement.parentElement.children[0].children[0].children[0].click();
  }

  return (
    <div class="image-container">
      <div class="image-subcontainer">
        <div class="image-subcontainer__image">
          <img width={image.width} height={image.height}
          src={image.src}
          alt={image.title}
          ></img>

        </div>
        <div onClick={onOverlayClick} class="image-subcontainer__description">
          <div class="image-subcontainer-overlay">
            <h2>
            <div>{image.company}</div>
            <div>"{image.title}"</div>
            <div>{image.year}</div>
            </h2>
            <div>{image.about}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image;