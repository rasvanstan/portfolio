import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa'; // Import desired React icons

const variants = {
 open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
 },
 closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
 },
};

const Navigation = ({ isOpen }) => ( // Pass isOpen prop
  <motion.ul variants={variants}>
    {isOpen && itemIds.map((item, index) => (
      <MenuItem key={index} path={item.path} text={item.text} icon={item.icon} iconClassName="icon" />
    ))}
  </motion.ul>
);

const itemIds = [
 { path: "/", text: "Home", icon: <FaHome /> },
 { path: "/projects", text: "Projects", icon: <FaBriefcase /> },
 { path: "/about", text: "About", icon: <FaUser /> },
 { path: "/contact", text: "Contact", icon: <FaEnvelope /> },
];

export default Navigation;
