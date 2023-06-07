import { Outlet, Link } from "react-router-dom";
import "./menu.scss";
import { useState } from "react";

function Menu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header-menu">
        <div className="profile-container">
          <img className="profile-image" src="./src/assets/Juliana.png" alt="Imagem pequena de perfil."/>
          <span className="profile-name">JULIANA HAZIM</span>
        </div>
        <nav className={`menu ${showMobileMenu ? "menu--show" : ""}`}>
          <Link to="/">Início</Link>
          <Link to="/sobremim">Sobre mim</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contato">Contato</Link>
          <button className="menu__close" onClick={handleShowMenuClick}>
            Fechar
          </button>
        </nav>
        <button className="show-menu" onClick={handleShowMenuClick}>
          Menu
        </button>
      </header>

      <Outlet />
      <footer className="read-the-docs">Contato </footer>
    </>
  );
}

export default Menu;