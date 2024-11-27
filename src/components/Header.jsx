import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importujemy Link z react-router-dom
import { FaBars } from 'react-icons/fa';
import './Header.css';
import logo from './images/logosl.png'; // Zakładając, że masz logo

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false); // Stan do zarządzania bocznym paskiem

  // Funkcja do przełączania widoczności menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Funkcja do przełączania widoczności bocznego paska
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        {/* Ikona menu, widoczna na urządzeniach mobilnych */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Symbol hamburgera */}
        </div>
        
        {/* Menu nawigacyjne */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/">Strona domowa</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/news">Aktualności</Link></li>
        </ul>
        
        {/* Ikona bocznego paska */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars size={20} color="white" /> {/* Ikona hamburgera dla bocznego paska */}
        </div>
      </nav>
      
      {/* Boczne menu */}
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="sidebar-content">
          <div className="logo_boczne">
            <img src={logo} alt="logo_boczne" />
          </div>
          <h2>Kontakt</h2>
          <p>35-064 Rzeszów, Rynek 22</p>
          <p>Telefon: 789 333 555</p>
          <p>Telefon: 791 732 787</p>
          <p>Email: <a href="mailto:info@zest.rzeszow.pl">slodka@chwila.rzeszow.pl</a></p>
          <h2>Godziny otwarcia:</h2>
          <p>Poniedziałek: 16:00-23:00</p>
          <p>Wtorek: 16:00-23:00</p>
          <p>Środa: 16:00-23:00</p>
          <p>Czwartek: 16:00-23:00</p>
          <p>Piątek: 16:00-01:00</p>
          <p>Sobota: 12:00-01:00</p>
          <p>Niedziela: 12:00-22:00</p>
        </div>
        
        
        <div className="close-sidebar" onClick={toggleSidebar}>
          &times; 
        </div>
        

      </div>
    </header>
  );
};

export default Header;
