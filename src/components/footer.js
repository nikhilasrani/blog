import React from "react"
import "../components/footer.css"

const Footer = () => (
  <div className="footer-class">
    © {new Date().getFullYear()}
    {` `}
    <a href="https://github.com/nikhilasrani">Nikhil Asrani</a>
  </div>
)

export default Footer
