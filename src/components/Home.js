import Navbar from './Nav/Navbar'
import Header from './Header'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import ButtonToTop from './ButtonToTop';
import { useState, useEffect } from 'react';

export default function General() {
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
    <>
      <Navbar/>
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
    </>
  );
}
