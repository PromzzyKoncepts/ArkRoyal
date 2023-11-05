import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './src/Pages/Home'
import About from './src/Pages/About';
import Blog from './src/Pages/Blog';
import Projects from './src/Pages/Projects';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Burger, Menu, Overlay } from './src/components/Hamburger';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
      useEffect(() => {
        AOS.init();
      }, []);
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <div>
      <Router>
        <div ref={node} className="hamburger">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Overlay open={open} onClick={() => setOpen(false)} />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
