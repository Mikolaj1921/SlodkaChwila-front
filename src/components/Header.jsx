import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import logo from './images/logosl.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  
  const menuIconRef = useRef(null); // Referencja do ikony menu
  const navLinksRef = useRef(null); // Referencja do listy menu
  const sidebarRef = useRef(null); // Referencja do bocznego menu
  const sidebarToggleRef = useRef(null); // Referencja do ikony bocznego menu


  // Funkcja do przełączania widoczności menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Funkcja do przełączania widoczności bocznego paska
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Funkcja do zamykania menu, gdy kliknięto poza ikonę menu
  const handleClickOutsideMenu = (event) => {
    if (
      menuIconRef.current && !menuIconRef.current.contains(event.target) && // Kliknięcie poza ikoną menu
      navLinksRef.current && !navLinksRef.current.contains(event.target)   // Kliknięcie poza listą menu
    ) {
      setMenuActive(false); // Zamknij menu
    }
  };


  // Funkcja do zamykania bocznego menu, gdy kliknięto poza nim
  const handleClickOutsideSidebar = (event) => {
    // Sprawdzamy, czy kliknięcie nie miało miejsca wewnątrz bocznego menu lub na ikonie bocznego menu
    if (
      sidebarRef.current && !sidebarRef.current.contains(event.target) &&  // Kliknięcie poza bocznym menu
      sidebarToggleRef.current && !sidebarToggleRef.current.contains(event.target) // Kliknięcie poza ikoną bocznego menu
    ) {
      setSidebarActive(false); // Zamknij boczne menu
    }
  };


  // Dodanie i usunięcie nasłuchiwania zdarzeń kliknięcia
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
      document.removeEventListener('click', handleClickOutsideSidebar);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Ikona menu */}
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          &#9776; {/* Symbol hamburgera */}
        </div>

        {/* Menu nawigacyjne */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`} ref={navLinksRef}>
          <li><Link to="/">Strona domowa</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/news">Aktualności</Link></li>
        </ul>

        {/* Ikona bocznego paska */}
        <div className="sidebar-toggle" onClick={toggleSidebar} ref={sidebarToggleRef}>
          <FaBars size={20} color="white" />
        </div>
      </nav>

      {/* Boczne menu */}
      <div 
        className={`sidebar ${sidebarActive ? 'active' : ''}`} 
        ref={sidebarRef} // Referencja do bocznego menu
      >
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


      </div>
    </header>
  );
};

export default Header;
