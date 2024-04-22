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

// Define the array of colors
const colors = ["#FFA500"];

const MenuItem = ({ path, text, icon, iconClassName }) => { // Add iconClassName prop here
  const navigate = useNavigate(); // Use useNavigate hook
  const { changeTheme } = useContext(BackgroundContext); // Get the changeTheme function from the context

  const handleClick = () => {
    navigate(path); // Navigate to the specified path
    changeTheme(); // Call the changeTheme function when clicked
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick} // Handle onClick event
    >
      <div className="text-placeholder">
        {icon && <span className={iconClassName}>{icon}</span>} {/* Check if icon exists */}
        {text}
      </div>
    </motion.li>
  );
};

export default MenuItem;
