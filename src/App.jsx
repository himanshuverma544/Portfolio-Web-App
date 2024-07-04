import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Designations from './components/designations/Designations';


function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Designations/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
