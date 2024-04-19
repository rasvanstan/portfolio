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

const colors = ["#FFA500"];

const MenuItem = ({ path, text, icon, iconClassName }) => { // Add iconClassName prop here
 const navigate = useNavigate(); // Use useNavigate hook

 const handleClick = () => {
    navigate(path); // Navigate to the specified path
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
