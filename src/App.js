import './App.css';
import Navbar from './components/Nav/Navbar'
import Header from './components/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ButtonToTop from './components/ButtonToTop';
import { useState, useEffect } from 'react';

function App() {
  const [ top, setTop ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          setTop(true)
      } else {
          setTop(false)
      }
    })
  }, [])
  
  const scrollUp = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }

  return (
    <div className="App font-Manrope">
      <Navbar />
      <Header />
      {
        top && (
          <ButtonToTop
            action = { scrollUp }
          />
        )
      }
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
