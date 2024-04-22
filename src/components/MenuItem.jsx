import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

// eslint-disable-next-line react/prop-types
const MenuItem = ({ path, text, icon, iconClassName, toggleOpen }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    toggleOpen(); // Call the toggleOpen function to close the dropdown menu
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
