import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-container" id="home">
      <div className="header-content">
        <div className="header-image">
          {/* Substituir por <img src={logo} alt="..." /> depois */}
        </div>
        <div className="header-text">
          <div className="header-title titulo2">_Rubee</div>
          <div className="header-slogan texto">UX · UI · FRONTEND<br />+ BACKEND ESSENCIAL</div>
        </div>
      </div>
    </header>
  );
}
