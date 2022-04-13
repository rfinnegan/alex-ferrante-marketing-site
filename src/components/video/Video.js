import React from 'react'
import './Video.css'

const Video = ({ video }) => {
  // const [shouldShow, setShouldShow] = useState(false)
  // const onShouldShow = () => { setShouldShow(!shouldShow)
  // }

  return (
    <div className="video-container">
      <div className="video-subcontainer">
        <div className="video-subcontainer__video">
          <iframe
            width={video.width}
            height={video.height}
            src={video.src}
            title={video.title} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <div>{video.company} "{video.title}" {video.year}</div>
          {/* <div className="video-about">{shouldShow ? video.about : null}</div> */}
          {/* <button onClick={onShouldShow}>about</button> */}
        </div>
      </div>
    </div>
  )
}


export default Video