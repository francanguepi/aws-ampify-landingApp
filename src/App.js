import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <Feature />
        <About 
          image={aboutimage} 
          title="Comes With All You Need For Daily Life"
          button="Get the App"
        />
        <About 
          image={aboutimage1} 
          title="Download And Get The APP Now"
          button="Download"
        />
        <Presentation />
        <Contact />
    </div>
  );
}

export default App;
