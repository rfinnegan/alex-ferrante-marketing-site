import VideoList from '../components/videoList/VideoList'
import videos from '../data/media'
import './Portfolio.css'

const Portfolio = () => (
  <div>
    <VideoList videos={videos} />
  </div>
)

export default Portfolio