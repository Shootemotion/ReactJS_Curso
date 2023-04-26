import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../img/Ecommerce.JPG';
import 'typeface-roboto';
import CartWidget from '../CartWidget/CartWidget.jsx'
import Avatar from '../Avatar/Avatar';




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
      <Avatar imageUrl="https://i.ibb.co/1TKL2HQ/Cartoon-Avatar-PNG-Image-Transparent.png" name="Test Name" />
      <CartWidget />


      </div>
    );
  }

  export default NavBar;