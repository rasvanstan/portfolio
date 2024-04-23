import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BackgroundProvider } from './components/BackgroundContext';
import DropDownMenu from './components/DropDownMenu';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import About from './components/About';
import Contact from './components/Contact';
import RightNavBar from './components/RightNavBar';

function App() {
 return (
    <BackgroundProvider>
      <Router basename="/">
        <DropDownMenu />
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
