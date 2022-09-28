import './App.css';
import Navbar from './components/Nav/Navbar'
import Header from './components/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App font-Manrope">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
