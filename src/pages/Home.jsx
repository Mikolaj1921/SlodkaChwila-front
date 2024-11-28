import React from 'react';
import './Home.css'; // Importujemy zaktualizowane style
//import backgroundImage from '../components/images/dohome.jpg';

//Górne tło pod nagłówkiem(przewijanie się zależne od scroolingu)
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Pobierz pozycję scrolla
  const menuCont = document.querySelector('.menu-cont');
  
  // Zmieniamy pozycję tła w zależności od scrolla
  menuCont.style.backgroundPosition = `center ${50 - scrollPosition * 0.2}%`;
});


const Home = () => {
  return (
    <div className="home-page">
      <div className="menu-cont">
        <div className="title-names">
          <h1 className="hero-title">Witaj w Słodkiej Chwili!</h1>
          <p className="hero-subtitle">Ciepłe, domowe wypieki na każdą okazję</p>
        </div>
      </div>
      
      

      <section className="about-section">
        <h2 className="section-title">Nasze wypieki:</h2>
        <div className="containerWypieki">
          <div className="card1">
            <button>Ciasta na każdą okazję</button>
          </div>
          <div className="card2">
            <button>Świeże ciasteczka i ciasteczka</button>
          </div>
          <div className="card3">
            <button>Desery bezglutenowe</button>
          </div>

        </div>

        {/*
        <ul className="service-list">
          <li>Ciasta na każdą okazję</li>
          <li>Świeże ciasteczka i ciasteczka</li>
          <li>Desery bezglutenowe</li>
          <li>Cukierki i praliny</li>
          <li>Wypieki sezonowe</li>
        </ul>
        */}

      </section>

      <section className="why-us-section">
        <h2 className="section-title">Dlaczego warto wybrać naszą ciastkarnię?</h2>
        <ul className="service-list">
          <li>Ręcznie robione wypieki</li>
          <li>Naturalne składniki</li>
          <li>Bez konserwantów</li>
          <li>Indywidualne zamówienia</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
