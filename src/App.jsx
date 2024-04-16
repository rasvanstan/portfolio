import React from 'react';
import "./styles/App.css"
import LeftNavBar from './components/LeftNavBar';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import About from './components/About';
import Contact from './components/Contact';
import { BackgroundProvider } from './components/BackgroundContext';
import RightNavBar from './components/RightNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   return (
     <BackgroundProvider>
       <Router>
           <LeftNavBar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<MyProjects />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
         <RightNavBar />
       </Router>
     </BackgroundProvider>
   );
 }

export default App;
