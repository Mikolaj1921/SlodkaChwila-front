
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Importowanie komponentów wspólnych
import Header from './components/Header';
import Footer from './components/Footer';

// Importowanie routingu
import Routing from './routing'; // Zmiana ścieżki na 'src/routing'

function App() {
  return (
    <Router>
      <Header />
      <Routing /> 
      <Footer />
    </Router>
  );
}

export default App;
