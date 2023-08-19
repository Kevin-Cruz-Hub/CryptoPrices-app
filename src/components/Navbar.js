import {Link} from 'react-router-dom'
import styles from '../App.css'
function Navbar() {
  return (
    <div className='nav'>
        {/* to: is similar to a href in an anchor tag and will navigate a user to the url */}
        {/* the path should match the ones in App.js, a new link needs to be created when linking to a page */}
      <Link to={'/'}>
        <div>Main</div>
      </Link>
      <Link to={'/Currencies'}>
        <div>Currencies</div>
      </Link>
      {/* <Link to={'/Prices'}>
        <div>Prices</div>
      </Link> */}
    </div>
  )
}
export default Navbar;