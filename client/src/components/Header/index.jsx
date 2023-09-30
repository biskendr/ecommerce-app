import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '~/Modal'
import Navbar from './Navbar'
import Menu from './Menu'

export default function Header() {
  const { open } = useSelector((state) => state.modal)

  return (
    <header className="header">
      {open && <Modal />}
      <Navbar />
      <h1 className="header-logo">
        <Link to="/" className="header-logo-small">
          <span className="material-symbols-sharp">copyright</span>
        </Link>
        <Link to="/" className="header-logo-large">
          <span className="material-symbols-sharp">Clothes</span>
        </Link>
      </h1>
      <Menu />
    </header>
  )
}
