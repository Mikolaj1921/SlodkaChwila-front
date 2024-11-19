import React from 'react';
import './Menu.css';
import backgroundImage from '../components/images/menu.jpg';
import nalesniki from '../components/images/nalesniki.jpg'


const Menu = () => {
  return (
    <div className="menu-page">

      <div className="menu-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>

      <div className="menu-text">
          <h1 className="menu-title">MENU</h1>
          <p>W naszej kuchni zwracamy uwagę</p>
          <p>na jakość składników, oraz sposób</p>
          <p>ich połączenia. Musimy być pewni,</p>
          <p>że to, co zamówicie skradnie Wasze</p>
          <p>serca.</p>
          <p>Ciasta, oraz pieczywo wypiekamy na</p>
          <p>miejscu. Korzystamy z mąki </p>
          <p>niestandaryzowanej, z lokalnego młyna.</p>
          <p>Do wypieku pieczywa używamy zakwasu,</p>
          <p>który sami wyhodowaliśmy i dokarmiamy</p>
          <p>go na co dzień.</p>
      </div>

      <div className="slodkie">
        <div className="NalesnikZSerem">
          <div className="nalesniki" style={{ backgroundImage: `url(${nalesniki})` }}
          ></div>

          <div className="opisnalesniki">
            <h2 className="dish-title">Naleśniki z serem - 30 zł</h2>
            <p>Delikatne naleśniki z twarogiem waniliowym i sosem owocowym oraz świeżą truskawką.</p>
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default Menu;
