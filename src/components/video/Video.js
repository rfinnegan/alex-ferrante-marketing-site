import React, { useState, useRef } from 'react'
import './Video.css'

const Video = ({ video }) => {
  // const [shouldShow, setShouldShow] = useState(false)
  // const onShouldShow = () => { setShouldShow(!shouldShow) }

  const iframeReference = useRef(null);

  const onOverlayClick = (event) => {
    console.log('DEBUG I HEARD CLICK');
    iframeReference.current.focus();
    // event.stopPropagation()
    // event.preventDefault();
    // console.log(event.target.parentElement.parentElement.children[0].children[0].children[0]);
    // event.target.parentElement.parentElement.children[0].children[0].children[0].click();
    // console.log(event)
  }

  return (
    <div class="video-container">
      <div class="video-subcontainer">
        <div class="video-subcontainer__video">
          <iframe
            ref={iframeReference}
            width={video.width}
            height={video.height}
            src={video.src}
            title={video.title} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          {/* <div>{video.company} "{video.title}" {video.year}</div>
          <div class="video-about">{shouldShow ? video.about : null}</div>
          <button onClick={onShouldShow}>about</button> */}
        </div>
        <div onClick={onOverlayClick} class="video-subcontainer__description">
          <div class="video-subcontainer-overlay">
            <h2>
            <div>{video.company}</div>
            <div>"{video.title}"</div>
            <div>{video.year}</div>
            </h2>
            <div>{video.about}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Video