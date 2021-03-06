import Video from '../video/Video'
import Image from '../image/Image'
import "./VideoList.css"

const VideoList = ({ videos }) => {

  return (
    <div className="videolist-container">
      {videos.map(media => 
        <div className="videolist-content" key= {media.id} >
          { media.type === "video" && <Video video={media} /> }
          { media.type === "image" && <Image image={media} /> }
        </div>
      )}
    </div>
  )
}

export default VideoList
