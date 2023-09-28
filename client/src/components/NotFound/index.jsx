import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found container">
      <p>Not found page</p>
      <p>
        Go <span className="material-symbols-sharp">chevron_right</span>
        <Link to="/">Homepage</Link>
      </p>
    </div>
  )
}
