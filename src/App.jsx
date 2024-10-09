import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import { Contact } from './components/Contact';
import { Project } from './components/Project';
import About from './components/About';

function App() {
  return (
    <Router>
       <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>

        </div>
    </Router>
  );
}

export default App;
