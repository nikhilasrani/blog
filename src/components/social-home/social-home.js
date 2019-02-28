import React from "react"
import "../social-home/social-home.css"

import { FaGithub, FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa"

const SocialHome = () => (
  <div className="social-links-container">
    <ul>
      <li>
        <a
          href="https://github.com/nikhilasrani"
          className="social-button github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href=" https://twitter.com/NikhilBAsrani"
          className="social-button twitter-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nikhil-asrani/"
          className="social-button linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@asrani.nikhil"
          className="social-button medium-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
      </li>
    </ul>
  </div>
)

export default SocialHome

//https://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/
