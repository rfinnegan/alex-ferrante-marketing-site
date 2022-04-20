import { useEffect } from 'react'
import Portfolio from '../Portfolio'
import ClientsList from '../../components/Clients/Clients'

import Email from '../../../assets/Email.png'
import IMDB from '../../../assets/IMDB.png'
import Instagram from '../../../assets/Instagram.png'


import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = "Alexander Ferrante | Editor"
  }, [])

  const style = {
    padding: 10,
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>ALEXANDER FERRANTE</h1>
        <h2>Editor | VFX | Motion GFX</h2>
      <div>
        <a style={style} href="https://www.imdb.com/name/nm12223333/"><img src={IMDB} alt="icon" className="icon-container"/></a>
        <a style={style} href="mailto:alexanderferrante@gmail.com"><img src={Email} alt="icon" className="icon-container" /></a>
        <a style={style} href="https://www.instagram.com/alexferrante_/?hl=en"><img src={Instagram} alt="icon" className="icon-container" /></a>
      </div>
      <Portfolio />
      <ClientsList />
      </div>
      <p>Alexander Ferrante 2022 &copy;</p>
    </div>
  )
}

export default Home