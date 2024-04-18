import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
 open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
 },
 closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
 },
};

const Navigation = () => (
 <motion.ul variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem key={index} path={item.path} text={item.text} />
    ))}
 </motion.ul>
);

const itemIds = [
 { path: "/", text: "Home" },
 { path: "/projects", text: "Projects" },
 { path: "/about", text: "About" },
 { path: "/contact", text: "Contact" },
];

export default Navigation;
