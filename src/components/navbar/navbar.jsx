import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/items">Lista de Amiibos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil de usuario</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nosotros</Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;