import React from 'react';
import "./styles/App.css"
import NavBar from './components/NavBar';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import About from './components/About';
import Contact from './components/Contact';
import { BackgroundProvider } from './components/BackgroundContext';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   return (
     <BackgroundProvider>
       <Router>
           <NavBar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<MyProjects />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
         <Footer />
       </Router>
     </BackgroundProvider>
   );
 }

export default App;
