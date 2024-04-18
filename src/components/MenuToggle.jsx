import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Path = (props) => (
 <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
 />
);

const MenuToggle = ({ toggle, isOpen }) => {
 const navigate = useNavigate(); // Use useNavigate hook

 const handleClick = () => {
    toggle();
 };

 return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isOpen ? "rgba(51, 51, 51, 0.8)" : "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "18px",
        left: "15px",
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>

  );
};

export default MenuToggle;
