import Cookies from 'js-cookie'

export default function Profile() {
  const { user } = JSON.parse(Cookies.get('user'))
  const { email, username } = user

  return (
    <div className="profile-home container">
      {user && (
        <div className="profile-home-info">
          <span className="material-symbols-sharp">account_circle</span>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  )
}
