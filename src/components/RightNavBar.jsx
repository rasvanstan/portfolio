import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../styles/RightNavBar.css'


function Footer() {
  return (
    <div className="icon-container">
      <a href="https://github.com/rasvanstan" target="_blank" rel="noopener noreferrer">
        <div className="social-icon"><AiFillGithub /></div>
      </a>
      <a href="https://www.linkedin.com/in/rasvanstan" target="_blank" rel="noopener noreferrer">
        <div className="social-icon"><FaLinkedinIn /></div>
      </a>
    </div>
  );
}

export default Footer;
