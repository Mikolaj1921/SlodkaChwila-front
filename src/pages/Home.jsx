import React from 'react';
import './Home.css'; // Importujemy zaktualizowane style

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="hero-title">Witaj w Słodkiej Chwili!</h1>
      <p className="hero-subtitle">Ciepłe, domowe wypieki na każdą okazję</p>

      <section className="about-section">
        <h2 className="section-title">Nasze wypieki</h2>
        <ul className="service-list">
          <li>Ciasta na każdą okazję</li>
          <li>Świeże ciasteczka i ciasteczka</li>
          <li>Desery bezglutenowe</li>
          <li>Cukierki i praliny</li>
          <li>Wypieki sezonowe</li>
        </ul>
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
