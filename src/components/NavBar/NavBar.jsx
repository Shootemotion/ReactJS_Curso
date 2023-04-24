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
          <Link to="/Content">
            <li className="nav-link-item">Inicio</li>
          </Link>
          <Link to="/category/Hogar">
            <li className="nav-link-item">Hogar</li>
          </Link>
          <Link to="/category/Decoración">
            <li className="nav-link-item">Decoración</li>
          </Link>
          <Link to="/category/Muebles">
            <li className="nav-link-item">Muebles</li>
          </Link>
          <Link to="/category/Cocina">
            <li className="nav-link-item">Cocina</li>
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