import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../img/Ecommerce.JPG';
import 'typeface-roboto';
import CartWidget from '../CartWidget/CartWidget.jsx'

function NavBar() {
    return (
      <div className="navbar-container">
          <div  className= "logo">
          <img className= "imglogo" src={Logo} alt="Logo" />
        </div>

      <nav>
            <ul className="nav-links">
          <Link to="/">
            <li className="nav-link-item">Inicio</li>
          </Link>
          <Link to="/productos">
            <li className="nav-link-item">Productos</li>
          </Link>
          <Link to="/contacto">
            <li className="nav-link-item">Contacto</li>
          </Link>
        </ul>
      </nav>
      <CartWidget />
      </div>
    );
  }

  export default NavBar;