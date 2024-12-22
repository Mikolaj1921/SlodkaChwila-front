import React, { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';


const Menu = () => {

  //przewijanie z Home do Menu
  const location = useLocation();

  useEffect(() => {
    const state = location.state;
    if (state && state.targetSection) {
      const element = document.getElementById(state.targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Przewija do wybranej sekcji
      }
    }
  }, [location]);



//Animacja listy menu
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista zdjęć
  const items = [
    { className: 'onC', title: 'Delikatne naleśniki z kremem waniliowym.', text:
    "Delikatne naleśniki z kremem waniliowym – miękkie i puszyste naleśniki wypełnione aksamitnym kremem waniliowym, polane rozpływającą się czekoladą, udekorowane kawałkami świeżych truskawek i delikatnie posypane cukrem pudrem. Wykwintny deser idealny na każdą okazję."
    },
    

    { className: 'twC', title: 'Beza Pavlova z owocami sezonowymi.', text:
    "Delikatna beza o chrupiącej skórce i miękkim wnętrzu, podana z lekko kwaśną śmietaną i świeżymi owocami sezonowymi. To ciasto pełne kontrastów smakowych – słodycz bezy, kremowość śmietany i świeżość owoców."
    },


    { className: 'thC', title: 'Kruche ciasteczka z marmoladą truskawkową.' , text:
    "Kruche ciasteczka z marmoladą truskawkową – delikatne, maślane ciasteczka wypełnione słodką i aromatyczną marmoladą truskawkową. Idealne jako przekąska do kawy lub herbaty, zachwycają smakiem i prostotą wykonania."
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Przejdź do następnego zdjęcia
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length); // Przejdź do poprzedniego zdjęcia
  };
// end

  return (
    <div className="menu-page">

      <section className="menu-container"> 

        <div className="menu-text">
            <h1 className="menu-title">Menu</h1>
            
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
      </section>


      <section class="carousel-container">
        <h2 id="Nowości w menu" className="titleC">Nowości w menu</h2>
        <div class="carousel">
          
          <div className='carousel-image'>
            <div className={`Carousel-image ${items[currentIndex].className}`}>
              <span>{items[currentIndex].alt}</span>
            </div>
          </div>

          <div className="carousel-text-container">
            <p className="carousel-title">{items[currentIndex].title}</p>
            <p className="carousel-text">{items[currentIndex].text}</p>
          </div> 

        </div>
      </section>

      <div className="ZmianaMenu">
              <button className="Lewo" onClick={goToPrev}></button>
              <button className="Prawo" onClick={goToNext}></button>
      </div>


      

      <section className="slodkie">
          <h1 id="CiastaNaKazdaOkazje" className='Naglowek'>- Ciasta na każdą okazję -</h1>  
            <div className="PositionMenuFirst">
              <div className="Nalesniki" ></div>
                <div className="opis">
                  <h2 className="dish-title">Naleśniki z mąki kokosowej z serem - 20 zł</h2>
                  <p>Delikatne naleśniki z twarogiem waniliowym i sosem owocowym oraz świeżą truskawką.</p>
                </div>
            </div>

            <div className="PositionMenuRight">
              <div className="opis">
                <h2 className="dish-title">Beza Pavlova - 25 zł</h2>
                <p>Deser z chrupiącej bezy, kremu śmietankowego i owoców, idealny dla osób na diecie bezglutenowej.</p>
              </div>
              <div className="BezaPavlova" ></div>
            </div>

            <div className="PositionMenuEnd">
              <div className="BrownieBezglutenowe" ></div>
              <div className="opis">
                <h2 className="dish-title">Brownie bezglutenowe - 10 zł</h2>
                <p>Ciasto czekoladowe przygotowane na bazie mąki migdałowej lub kokosowej, intensywnie czekoladowe i wilgotne.</p>
              </div>
            </div>

        <h1 id="Świeże ciasteczka" className='Naglowek'>- Świeże ciasteczka -</h1>

          <div className="PositionMenuFirst">
            <div className="ciasteczkaD" ></div>
            <div className="opis">
              <h2 className="dish-title">Ciasteczka z nadzieniem malinowym - 10 zł</h2>
              <p>Delikatne naleśniki z twarogiem waniliowym i sosem owocowym oraz świeżą truskawką.</p>
            </div>
          </div>


          <div className="PositionMenuEnd">
            <div className="opis">
              <h2 className="dish-title">Pudding chia - 10 zł</h2>
              <p>Lekki deser na bazie mleka roślinnego, nasion chia i świeżych owoców, często z dodatkiem</p>
              <p> syropu klonowego.</p>
            </div>
            <div className="PuddingChia" ></div>
          </div>

        <h1 id="DeseryBezglutenowe" className='Naglowek'>- Desery Bezglutenowe -</h1>        


          <div className="PositionMenuFirst">
            <div className="Nalesniki" ></div>
            <div className="opis">
              <h2 className="dish-title">Naleśniki z mąki kokosowej z serem - 20 zł</h2>
              <p>Delikatne naleśniki z twarogiem waniliowym i sosem owocowym oraz świeżą truskawką.</p>
            </div>
          </div>

          <div className="PositionMenuRight">
            <div className="opis">
              <h2 className="dish-title">Beza Pavlova - 25 zł</h2>
              <p>Deser z chrupiącej bezy, kremu śmietankowego i owoców, idealny dla osób na diecie </p>
              <p>bezglutenowej.</p>
            </div>
            <div className="BezaPavlova" ></div>
          </div>

          <div className="PositionMenuLeft">
            <div className="BrownieBezglutenowe" ></div>
            <div className="opis">
              <h2 className="dish-title">Brownie bezglutenowe - 10 zł</h2>
              <p>Ciasto czekoladowe przygotowane na bazie mąki migdałowej lub kokosowej, intensywnie czekoladowe i wilgotne.</p>
            </div>
          </div>

          <div className="PositionMenuEnd">
            <div className="opis">
              <h2 className="dish-title">Pudding chia - 10 zł</h2>
              <p>Lekki deser na bazie mleka roślinnego, nasion chia i świeżych owoców, często z dodatkiem</p>
              <p> syropu klonowego.</p>
            </div>
            <div className="PuddingChia" ></div>
          </div>

        

      </section>



    </div>
  );
};

export default Menu;
