import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className="header">
      <nav className="header-navbar">
        <div
          className={`header-hamburger ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
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
      <h1 className="header-logo">
        <Link to="/">Clothes</Link>
      </h1>
      <div className="header-actions">
        <ul className="header-actions-menu">
          <li>
            <span className="material-symbols-sharp">search</span>
          </li>
          <li>
            <span className="material-symbols-sharp">favorite</span>
          </li>
          <li>
            <span className="material-symbols-sharp">person</span>
          </li>
          <li>
            <span className="material-symbols-sharp">shopping_bag</span>
          </li>
        </ul>
      </div>
    </header>
  )
}
