import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useBackground } from './BackgroundContext'; // Adjust the path to your BackgroundContext file

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ path, text }) => {
  const navigate = useNavigate(); // Use useNavigate hook
  const { changeTheme } = useBackground(); // Get the changeTheme function from BackgroundContext
  const style = { border: `2px solid ${colors[0]}` }; // Assuming a single color for simplicity

  const handleClick = () => {
    changeTheme(); // Change the background theme
    navigate(path); // Navigate to the specified path
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick} // Handle onClick event
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style}>
        {text}
      </div>
    </motion.li>
  );
};

export default MenuItem;
