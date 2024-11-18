import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importujemy Link z react-router-dom
import './Header.css';

const Header = () => {
  // Stan kontrolujący widoczność menu na urządzeniach mobilnych
  const [menuActive, setMenuActive] = useState(false);

  // Funkcja do przełączania widoczności menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        {/* Ikona menu, widoczna na urządzeniach mobilnych */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Symbol hamburgera */}
        </div>
        
        {/* Menu nawigacyjne */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/">Strona domowa</Link></li>  {/* Link do strony Home */}
          <li><Link to="/contact">Kontakt</Link></li>  {/* Link do strony Contact */}
          <li><Link to="/menu">Menu</Link></li>  {/* Link do strony Menu */}
          <li><Link to="/news">Aktualności</Link></li>  {/* Link do strony News */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
