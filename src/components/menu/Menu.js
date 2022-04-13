import './Menu.css'

const Menu = () => {
  const padding = {
    padding: 10
  }

  return (
      <div className="menu-container">
        <div className="menu-content">
              <a style={padding} href="/home">Home</a>
              <a style={padding} href="/portfolio">Portfolio</a>
        </div>
      </div>
  )
}

export default Menu