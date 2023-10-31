import './Navbar.scss'

import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'


const Navbar = () => {
  return (
    <nav>
        <h1>
          <Link to="/"><BiCameraMovie/> Filmezando</Link>
        </h1>

        <form>
            <input type="text" placeholder='Busque um filme'/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>



          {/* <Link to="/movie/1">Movie</Link>
          <Link to="/search">search</Link> */}
      </nav>
  )
}

export default Navbar
