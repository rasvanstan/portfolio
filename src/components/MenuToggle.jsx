import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="2" // Increase the strokeWidth for better alignment
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="butt" // Use "butt" strokeLinecap for better alignment
      {...props}
    />
  );
  

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    style={{
      backgroundColor: isOpen ? "rgba(51, 51, 51, 0.1)" : "white", // Background color based on isOpen
      borderRadius: "50%", // Ensure the button is round
      width: "60px", // Set the width and height to ensure a circular shape
      height: "60px",
      border: "none", // Remove border
      cursor: "pointer", // Change cursor to pointer
      position: "absolute", // Position the button absolutely
      top: "10px", // Align vertically in the middle
      left: "10px" // Align horizontally in the middle
    }}
  >
    <svg width="53" height="23" viewBox="0 0 23 23">
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

export default MenuToggle;
