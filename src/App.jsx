import "./styles/App.css";
import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
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
      <BrowserRouter>
        <DropDownMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <RightNavBar />
      </BrowserRouter>
    </BackgroundProvider>
 );
}

export default App;
