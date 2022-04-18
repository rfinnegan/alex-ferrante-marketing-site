import { useEffect } from 'react'
import Portfolio from '../Portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faImdb } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'Home'
  }, [])

  const padding = {
    padding: 15
  }

  return (
    <div className="home-container">
      <div className="home-content">
      <h1>ALEXANDER FERRANTE</h1>
      <h2>Editor | VFX | Motion GFX</h2>
      <div className="icon-container">
        <a style={padding} href="https://www.instagram.com/alexferrante_/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
        <a style={padding}href="https://www.imdb.com/name/nm12223333/"><FontAwesomeIcon icon={faImdb} /></a>
        <a style={padding} href="mailto:alexanderferrante@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      <Portfolio />
    </div>
    </div>
  )
}

export default Home