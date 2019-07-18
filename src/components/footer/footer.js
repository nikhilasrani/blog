import React from "react"
import "../footer/footer.css"
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble} from "react-icons/fa"

const Footer = () => (
  <div className="footer-class">
    <div className="footer-social-links-container">
      <ul>
        <li>
          <a
            href="https://github.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href=" https://twitter.com/NikhilBAsrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nikhil-asrani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-name">
      <p>
      © {new Date().getFullYear()}
      {` `}
      Nikhil Asrani</p>
    </div>
  </div>
)

export default Footer
