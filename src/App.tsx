import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
  );
}