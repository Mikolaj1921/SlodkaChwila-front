import React from 'react';
import { Link } from 'react-router-dom';  // Importujemy Link z react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Dodajemy linki do różnych stron */}
        <ul className="nav-links">
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
