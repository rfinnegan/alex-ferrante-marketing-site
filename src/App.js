import React from 'react'
import Router from './router'
import Menu from './components/menu/Menu'
import './styles/colors.css'
import './styles/elements.css'
import './styles/responsive.css'
import './styles/typography.css'
import './styles/app.css'

const App = () => {
  

  return (
    <div class="app-content">
      <Menu />
      <div class="router"><Router /></div>
    </div>
  )
}

export default App
