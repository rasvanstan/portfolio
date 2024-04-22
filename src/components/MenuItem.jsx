import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useContext } from 'react'; // Import useContext
import BackgroundContext from './BackgroundContext'; // Import BackgroundContext

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// eslint-disable-next-line react/prop-types
const MenuItem = ({ path, text, icon, iconClassName, toggleOpen }) => {
  const navigate = useNavigate(); // Use useNavigate hook
  const { changeTheme } = useContext(BackgroundContext); // Get the changeTheme function from the context

  const handleClick = () => {
    navigate(path); // Navigate to the specified path
    toggleOpen && toggleOpen(); // Call toggleOpen function if it exists to close the dropdown menu
    changeTheme && changeTheme(); // Call changeTheme function if it exists
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="text-placeholder">
        {icon && <span className={iconClassName}>{icon}</span>}
        {text}
      </div>
    </motion.li>
  );
};

export default MenuItem;
