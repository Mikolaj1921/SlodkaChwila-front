import React from 'react';
import './Home.css';
import './Homecards.css';
//import { Container } from 'postcss';
//import backgroundImage from '../components/images/dohome.jpg';


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
        <div className="containerInfo1">
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

        <ul className="containerInfo">
          <div className="card4">
            <button>Cukierki i praliny</button>
          </div>

          <div className="card5">
            <button>Czekolady</button>
          </div>

        </ul>

      </section>

      <section className="SezonoweWypieki">
        <h2 className="section-title">Sezonowe Wypieki w SłodkaChwila – Poczuj Magię Każdej Pory Roku!</h2>
        <ul className="service-list2">
          <h3>
            W cukierni SłodkaChwila każdy sezon to okazja, by zaoferować Ci wyjątkowe wypieki,
            które czerpią z najlepszych smaków i aromatów pory roku. Nasze sezonowe wypieki to
            połączenie tradycji z nowoczesnymi inspiracjami, dzięki czemu możesz cieszyć się
            niezapomnianymi smakami, które pasują do każdej okazji i pory roku.
          </h3>
        </ul>
        <h2 className="subtitle">Wiosna: Świeże i Owocowe Inspiracje</h2>
        <ul className="service-list2">
          <h3>
            Wiosną, kiedy przyroda budzi się do życia, nasze wypieki nabierają lekkich i świeżych smaków.
            Ciasta z owocami sezonowymi, takie jak truskawki, jagody czy rabarbar, to idealny wybór na
            ciepłe, słoneczne dni. W tym okresie serwujemy również delikatne biszkopty i tarty z lekkimi
            kremami, które przypominają wiosenne poranki. Nasze wiosenne wypieki to prawdziwa uczta dla
            zmysłów, które wprowadzą Cię w radosny, pełen energii nastrój.
          </h3>
        </ul>
        <ul className="containerInfo">
          <div className="card6">
            <button>Odkryj wiosenne smaki Słodkiej Chwili</button>
          </div>
        </ul>
        <h2 className="subtitle">Lato: Chłodne, Owocowe Orzeźwienie</h2>
        <ul className="service-list2">
          <h3>
            Lato to czas na lekkie i orzeźwiające wypieki, które zaspokoją pragnienie i dodadzą energii.
            W ofercie znajdziesz lemoniady w formie ciast, letnie tarty z owocami takimi jak maliny,
            porzeczki czy borówki, a także bezy z lekkimi kremami na bazie mascarpone. Wszystkie nasze
            wypieki są pełne naturalnych, owocowych smaków, które przywołują wspomnienia letnich dni.
            Ciesz się świeżymi, chłodnymi wypiekami, które są idealnym uzupełnieniem letnich spotkań
            i pikników.
          </h3>
        </ul>
        <ul className="containerInfo">
          <div className="card7">
            <button>Odkryj letnie orzeźwiające smaki Słodkiej Chwili</button>
          </div>
        </ul>

        <h2 className="subtitle">Jesień: Aromatyczne Przyprawy i Korzenne Smaki</h2>
        <ul className="service-list2">
          <h3>
          Jesień to czas, w którym pojawiają się intensywne, korzenne smaki.
          W SłodkaChwila nie możemy się oprzeć aromatom cynamonu, goździków, imbiru i gałki muszkatołowej.
          Nasze ciasta z dynią, jabłeczniki, a także korzenne ciasteczka wypełniają zapachem całe wnętrze
          cukierni. Te wypieki to prawdziwa rozkosz dla smakoszy, którzy cenią sobie głębokie,
          rozgrzewające smaki idealne na chłodne, jesienne wieczory. W ofercie znajdują się także pyszne
          ciasta z orzechami, które świetnie komponują się z filiżanką ciepłej herbaty.
          </h3>
        </ul>
        <ul className="containerInfo">
          <div className="card8">
            <button>Odkryj jesienne rozgrzewające smaki Słodkiej Chwili</button>
          </div>
        </ul>

        <h2 className="subtitle">Zima: Czekolada, Orzechy i Słodkie Przyprawy</h2>
        <ul className="service-list2">
          <h3>
          Zima to czas na intensywne smaki, które rozgrzewają i dodają energii.
          W tym okresie nasze wypieki to połączenie czekolady, orzechów i przypraw.
          W menu pojawiają się pierniki, pyszne ciasta czekoladowe, kremowe rolady
          oraz świąteczne ciasteczka z korzennymi przyprawami. Idealnym wyborem są
          także ciasta z dodatkiem alkoholu, które wprowadzają w świąteczny nastrój.
          Oferujemy również świąteczne pączki i karnawałowe przysmaki, które umilą Ci
          zimowe dni i święta.

          Nasze sezonowe wypieki to nie tylko pyszne ciasta, ale także wspomnienia i emocje, które towarzyszą każdej porze roku. Dzięki świeżym, lokalnym składnikom i naszym unikalnym przepisom, każdy sezon staje się okazją, by rozkoszować się nowymi smakami. SłodkaChwila to miejsce, gdzie pasja do pieczenia spotyka się z miłością do sezonowych smaków. Zapraszamy do naszej cukierni, by spróbować wypieków, które zmieniają się wraz z porami roku – zrób sobie słodką chwilę każdego dnia!

          </h3>
        </ul>
        <ul className="containerInfo">
          <div className="card9">
            <button>Odkryj zimowe smaki Słodkiej Chwili</button>
          </div>
        </ul>


        <h2 className="subtitle">O sezonowych wypiekach</h2>
        <ul className="service-list2">
          <h3>
          Nasze sezonowe wypieki to nie tylko pyszne ciasta, ale także wspomnienia i emocje,
          które towarzyszą każdej porze roku. Dzięki świeżym, lokalnym składnikom i naszym unikalnym 
          przepisom, każdy sezon staje się okazją, by rozkoszować się nowymi smakami. SłodkaChwila 
          to miejsce, gdzie pasja do pieczenia spotyka się z miłością do sezonowych smaków.</h3>
          <h3>
          Zapraszamy do naszej cukierni, by spróbować wypieków, które zmieniają się wraz z porami
          roku – zrób sobie słodką chwilę każdego dnia!
          </h3>
        </ul>
        <ul className="containerInfo">
          <div className="card10">
            <button>Sezonowe wypieki</button>
          </div>
        </ul>


      </section>

      <section className="Napoje">
        <h2 className="section-title">Napoje, które Umilą Twoją Chwilę</h2>
          <ul className="service-list2">
            <h3>
            W SłodkiejChwili napoje to coś więcej niż tylko dodatek do wypieków – to małe
            rytuały przyjemności, które współgrają z porami roku i wzbogacają doświadczenie
            naszych gości. Przygotowywane z najwyższą starannością, na bazie świeżych składników
            i aromatycznych dodatków, idealnie podkreślają smak słodkich przysmaków.</h3>
            <h3>
            Nasze napoje to harmonia klasyki i kreatywności. Kawa, herbata i gorąca czekolada tworzą
            podstawę naszej oferty, a ich smaki są wzbogacane naturalnymi syropami, przyprawami
            i mlekiem roślinnym dla tych, którzy szukają czegoś wyjątkowego. Każdy łyk przynosi
            chwilę relaksu, która pozwala zwolnić tempo i cieszyć się chwilą.
            </h3>
          </ul>
          <ul className="containerInfo">
            <div className="card11">
              <button>Napoje SłodkaChwila</button>
            </div>
          </ul>

          <h2 className="section-title">Seasonowe napoje SłodkiejChwili</h2>
          <ul className="service-list2">
            <h3>
            Sezonowe napoje w SłodkiejChwili to wyjątkowe kompozycje inspirowane zmieniającymi się
            porami roku. Dzięki starannie dobranym składnikom i kreatywnym połączeniom smaków, każdy
            sezon staje się okazją do odkrywania nowych ulubionych napojów. To coś więcej niż zwykły
            napój – to uczta dla zmysłów i sposób na celebrację chwili.</h3>
          </ul>
          <ul className="containerInfo">
            <div className="card12">
              <button>Napoje Zimowe</button>
              
            </div>
            <div className="card13">
              <button>Napoje Wiosenne</button> 
            </div>
          </ul>

          <div className='containerOpisNapoje'>
            <div className='opisZima'>
              <h3 className="TytulSeason">Zima – Rozgrzewająca Magia</h3>
              <h3>W chłodne, zimowe dni oferujemy napoje, które nie tylko rozgrzewają, ale także wprowadzają w świąteczny nastrój.
                Piernikowe latte – kawa z nutą przypraw korzennych, cynamonu i miodu.
                Czekolada na gorąco z chilli – kremowa, z lekką ostrością, która dodaje energii.
                Grzane jabłka z imbirem i goździkami – aromatyczny, bezalkoholowy napój, idealny na mroźne dni.</h3>
            </div>
            <div className="OpisWiosna">
              <h3 className="TytulSeason">Wiosna – Lekkość i Świeżość</h3>
              <h3>Wiosenne napoje to eksplozja delikatnych i orzeźwiających smaków, które przywodzą na myśl budzącą się naturę.
                  Cytrusowa herbata z lawendą – delikatna, z nutą kwiatowych aromatów.
                  Zielona herbata z miętą i miodem – odświeżająca i lekko słodka.
                  Lemoniada z kwiatem bzu – subtelna, z odrobiną wiosennej słodyczy.</h3>
            </div>
          </div>
          <ul className="containerInfo">
            <div className="card14">
              <button>Napoje Letnie</button>
              
            </div>
            <div className="card15">
              <button>Napoje Jesienne</button> 
            </div>
          </ul>
          <div className='containerOpisNapoje'>
            <div className='opisLato'>
              <h3 className="TytulSeason">Lato – Orzeźwienie w Każdym Łyku</h3>
              <h3>Latem królują napoje chłodzące, które gaszą pragnienie i dodają energii w upalne dni.
                  Mrożona kawa z lodami waniliowymi – idealne połączenie kawy i deseru.
                  Lemoniada arbuzowa z miętą – słodka i orzeźwiająca.
                  Iced tea z brzoskwinią i hibiskusem – lekka, owocowa propozycja na gorące dni.</h3>
            </div>
            <div className="OpisJesień">
              <h3 className="TytulSeason">Jesień – Bogactwo Smaków</h3>
              <h3>Jesienne napoje to ciepłe i aromatyczne kompozycje, które rozgrzewają i dodają otuchy.
                  Pumpkin spice latte – klasyk o smaku dyni i przypraw korzennych.
                  Gruszka z cynamonem na ciepło – słodki napój z naturalnym aromatem jesiennych owoców.
                  Herbata z suszonymi owocami i goździkami – pełna głębokiego, rozgrzewającego smaku.</h3>
            </div>
          </div>

      </section>

      <section className="informacje">
        <h2 className="section-title-info">Informacje o nas</h2>
        <ul className="info-opis">
          <h3>
            Słodka Chwila to miejsce, w którym każdy kęs to prawdziwa przyjemność. Nasza cukiernia powstała z pasji do pieczenia i miłości do wyjątkowych smaków. Stawiamy na jakość i świeżość składników, dlatego w naszych wypiekach znajdziesz tylko najlepsze produkty, pochodzące od lokalnych dostawców. Chcemy, aby każda chwila spędzona w Słodkiej Chwili była pełna radości, dlatego nasza oferta zmienia się zgodnie z porami roku, oferując zawsze coś świeżego, pysznego i w pełni dopasowanego do nastroju każdej pory roku.
           </h3><h3> W Słodkiej Chwili znajdziesz szeroką gamę wypieków – od klasycznych ciast, przez kreatywne torty, aż po małe słodkości idealne na prezent czy do podzielenia się z bliskimi. Nasze ciasta są przygotowywane z miłością, aby dostarczyć Ci niezapomnianych smaków, które otulą Cię w każdej chwili. Dzięki wyjątkowym recepturom i unikalnym połączeniom smakowym nasze wypieki to nie tylko jedzenie – to prawdziwa przyjemność, którą warto dzielić.
           </h3><h3>Słodka Chwila to także przestrzeń, w której można spędzić czas w miłej atmosferze, pijąc aromatyczną kawę i delektując się słodkościami w towarzystwie bliskich. Nasza cukiernia to więcej niż miejsce na szybki deser – to przestrzeń pełna inspiracji i smaków, które na długo pozostaną w pamięci.
           </h3><h3>Dołącz do nas i zrób sobie słodką chwilę w ciągu dnia!
          </h3>
        </ul>
        <ul className="containerInfo">
            <div className="card16">
              <button>Kontakt</button>
            </div>

            <div className="card17">
              <button>Aktualności</button> 
            </div>
        </ul>
        <ul className="info-tytul-media">
          <h3>Zaobserwój nas na mediach społecznościowych:</h3>
        </ul>
        <ul className="info-opis-media">
          <h3><strong>Instagram:</strong> slodkachwila_rzeszow</h3>
          <h3><strong>Facebook:</strong> SlodkaChwila Rzeszow</h3>
        </ul>
      </section>
    </div>
  );
};

export default Home;
