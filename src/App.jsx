import './App.css';
import { useState } from 'react'
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Home />
      <About/>
      <Project />
      <Skill/>
      <Contact />
      <Footer/>
    
    </div>
  )
}

export default App
