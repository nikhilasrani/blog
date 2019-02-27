import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/social.css"

import { FaGithub, FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa"

const Social = () => (
  <div className="social-links-container">
    <ul>
      <li>
        <a
          href="https://github.com/nikhilasrani"
          class="social-button github-button"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href=" https://twitter.com/NikhilBAsrani"
          class="social-button twitter-button"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nikhil-asrani/"
          class="social-button linkedin-button"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@asrani.nikhil"
          class="social-button medium-button"
          target="_blank"
        >
          <FaMedium />
        </a>
      </li>
    </ul>
  </div>
)

export default Social

//https://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/
