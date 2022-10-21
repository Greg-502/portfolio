import Navbar from './Nav/Navbar'
import Header from './Header'
import Skills from './Skills/Skills'
import ButtonToTop from './ButtonToTop';
import { useState, useEffect, lazy, Suspense } from 'react';
import 'boxicons'

const Projects = lazy(() => import('./Projects/Projects'))
const Contact = lazy(() => import('./Contact/Contact'))

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
      <Navbar />
      <Header />
      <Skills />

      <Suspense>
        {
          top && (
            <ButtonToTop
              action = { scrollUp }
            />
          )
        }
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}
