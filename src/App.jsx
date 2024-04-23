import "./styles/App.css";
import { HashRouter , Route, Routes, Navigate} from 'react-router-dom';
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
       <HashRouter>
         <DropDownMenu />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<MyProjects />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
         <RightNavBar />
       </HashRouter>
     </BackgroundProvider>
  );
 }

export default App;
