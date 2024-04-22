import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import '../styles/DropDownMenu.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const DropDownMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} toggleOpen={toggleOpen} /> {/* Pass toggleOpen prop */}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default DropDownMenu;
