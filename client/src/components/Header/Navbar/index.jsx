import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <nav className="header-navbar">
      <div
        className={`header-hamburger ${menuActive ? 'active' : ''}`}
        onClick={toggleMenu}
        role="presentation"
      >
        <span className="header-hamburger-bar" />
        <span className="header-hamburger-bar" />
        <span className="header-hamburger-bar" />
      </div>
      <ul className={`header-navbar-menu ${menuActive ? 'active' : ''}`}>
        <li className="header-navbar-menu-item">
          <Link className="header-navbar-menu-item-link" to="categories/1">
            Women
          </Link>
        </li>
        <li className="header-navbar-menu-item">
          <Link className="header-navbar-menu-item-link" to="categories/2">
            Men
          </Link>
        </li>
      </ul>
    </nav>
  )
}
