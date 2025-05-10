import '../styles/Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/rubee_logo.webp';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (targetId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      localStorage.setItem('scrollTo', targetId);
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">   
        <Link to="/">
          <img src={logo} alt="Logo Rubee" className="navbar-logo" />
        </Link>
        <div className="navbar-link">       
          <span className="titulo3" onClick={() => handleNavClick('projetos')}>PROJETOS</span>
          <span className="titulo3" onClick={() => handleNavClick('sobre')}>SOBRE</span>
          <span className="titulo3" onClick={() => handleNavClick('contato')}>CONTATO</span>
        </div>
      </div>  
    </nav>
  );
}
