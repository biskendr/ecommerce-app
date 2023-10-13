import { Outlet } from 'react-router-dom'
import ProfileMenu from '~/Profile/Menu'

export default function ProfileLayout() {
  return (
    <div className="profile container">
      <ProfileMenu />
      <Outlet />
    </div>
  )
}
