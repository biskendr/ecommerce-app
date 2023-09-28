import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="not-found container">
      <p>Upps something wents wrong... | 404</p>
      <p>
        Go <span className="material-symbols-sharp">chevron_right</span>
        <Link to="/">Homepage</Link>
      </p>
    </div>
  )
}
