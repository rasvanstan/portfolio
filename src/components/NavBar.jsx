import { useContext }from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { BiHomeAlt2, BiSolidUser, BiSolidContact } from 'react-icons/bi';
import { HiDesktopComputer } from 'react-icons/hi';
import BackgroundContext  from './BackgroundContext';

function NavBar() {
  const { changeTheme } = useContext(BackgroundContext);
 
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    changeTheme(); // Invoke changeTheme on every navigation
    navigate(path);
  };

  return (
    <div className='navbar-container'>
      <Link to='/' className='styled-link' onClick={() => handleNavigation('/')}>
        <BiHomeAlt2 />
      </Link>
      <Link to='/projects' className='styled-link' onClick={() => handleNavigation('/projects')}>
        <HiDesktopComputer />
      </Link>
      <Link to='/about' className='styled-link' onClick={() => handleNavigation('/about')}>
        <BiSolidUser />
      </Link>
      <Link to='/contact' className='styled-link' onClick={() => handleNavigation('/contact')}>
        <BiSolidContact />
      </Link>
    </div>
  );
}

export default NavBar;