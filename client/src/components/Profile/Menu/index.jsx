import { Link } from 'react-router-dom'

export default function ProfileMenu() {
  return (
    <div className="profile-menu">
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="address">Address</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
      </ul>
    </div>
  )
}
