import React from 'react';
import './Home.css'; // Importujemy zaktualizowane style
//import backgroundImage from '../components/images/dohome.jpg';

//Górne tło pod nagłówkiem(przewijanie się zależne od scroolingu)
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Pobieranie pozycji scrolla
  const menuCont = document.querySelector('.menu-cont');
  
  // Zmieniamy pozycję tła w zależności od scrolla
  menuCont.style.backgroundPosition = `center ${50 - scrollPosition * 0.04}%`;
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
        <h2 className="section-title">Nasze wypieki</h2>
        <div className="l1">
          <h3>Zapraszamy do świata pełnego wyjątkowych smaków, aromatów i pasji,
          które zawdzięczamy naszym starannie przygotowanym wypiekom.</h3>
          <h3>W naszej ofercie znajdziesz szeroki wybór świeżych, domowych ciast,
          ciasteczek i innych pyszności, które łączą tradycję z nowoczesnymi smakami.</h3>
          Nasze wypieki powstają z najlepszych składników, co gwarantuje ich
          niezrównany smak i jakość.</div>
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

      </section>

      <section className="why-us-section">
        <h2 className="section-title">Dlaczego warto wybrać naszą ciastkarnię?</h2>
        <ul className="service-list">
          <h3>Świeżość i naturalność – Wszystkie nasze ciasta, ciasteczka i wypieki
            przygotowujemy na bieżąco, używając wyłącznie świeżych i naturalnych składników.
            Dzięki temu możesz być pewien, że każdy kęs to prawdziwa uczta smakowa.</h3>
          <h3>Tradycja z nutą nowoczesności – Nasze wypieki to połączenie tradycyjnych receptur,
            które znamy i kochamy, z nowoczesnymi pomysłami i unikalnymi smakami.
            Każde ciasto jest przygotowane z dbałością o detale, a ich wygląd sprawia,
            że nie możesz się oprzeć, by spróbować ich jak najszybciej.</h3>
          <h3>Idealne na każdą okazję – Niezależnie od tego, czy planujesz małą uroczystość,
            rodzinne spotkanie, czy po prostu chcesz rozpieścić siebie i swoich bliskich
            – nasze wypieki będą doskonałym wyborem. W ofercie mamy zarówno klasyczne ciasta,
            jak i te bardziej wyszukane, które zachwycą nawet najbardziej wymagających smakoszy.</h3>
          <h3>Pyszne smaki i aromaty – Czekoladowe, owocowe, karmelowe, orzechowe – u nas
            znajdziesz wypieki, które zaspokoją każde kulinarne pragnienie. Nasze wypieki
            są pełne smaku, aromatu i pasji, które w każdym kawałku przenoszą Cię do raju smaków.</h3>
          <h3>Ręczna produkcja – Każdy nasz wypiek jest robiony z sercem, ręcznie, z dbałością
            o każdy detal. Dzięki temu mamy pewność, że nasze produkty są nie tylko smaczne,
            ale i unikalne.</h3>
        </ul>
      </section>

      <section className="unikalneWypieki">
        <h2 className="section-title">Unikalne słodycze</h2>
        <ul className="service-list2">
          <h3>Oferujemy najlepsze i najbardziej luksusowe słodkości, które potrafią 
            rozpieszczać zmysły i sprawić, że każda chwila stanie się jeszcze bardziej wyjątkowa.
            W naszej cukierni SłodkaChwila każdy produkt to prawdziwe dzieło sztuki cukierniczej,
            ręcznie robione z najwyższej jakości składników.</h3>
          <h3>Nasze praliny, cukierki i czekolady to idealne połączenie tradycji i nowoczesności,
            które zachwycają nie tylko smakiem, ale i wyglądem. Każdy kęs to mała eksplozja
            smaków – od klasycznych, czekoladowych nadzień, przez subtelne praliny z karmelowym
            nadzieniem, aż po wyjątkowe kompozycje z orzechami, owocami czy niebanalnymi przyprawami.
          </h3>
          <h3>
          W naszej ofercie znajdziesz także wyjątkowe czekolady o niepowtarzalnych smakach, 
          które idealnie komponują się z filiżanką kawy czy kieliszkiem wina
          </h3>
        </ul>

        <ul className="containerWypieki2">
          <div className="card4">
            <button>Cukierki i praliny</button>
          </div>

          <div className="card5">
            <button>Czekolady</button>
          </div>

        </ul>

      </section>

      {/*
        <ul className="service-list">
          <li>Ciasta na każdą okazję</li>
          <li>Świeże ciasteczka i ciasteczka</li>
          <li>Desery bezglutenowe</li>
          <li>Cukierki i praliny</li>
          <li>Wypieki sezonowe</li>
        </ul>
        */}
    </div>
  );
};

export default Home;
