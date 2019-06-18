import React from "react"
import "../footer/footer.css"

const FooterHome = () => (
  <div className="footer-class">
    {" "}
    <h2 style={{textAlign:"center"}}>Get in Touch</h2>
    <p>Connect with me for any opportunities, or just to say hello {" "} 
      <span role="img" aria-label="hand-wave">👋</span><br/>
      <a href="mailto:asrani.nikhil@gmail.com">asrani.nikhil@gmail.com</a>
      <br/>
     
      <div className="footer-name">
      © {new Date().getFullYear()}
      {` `}
      Nikhil Asrani
    </div>
      </p>
   
   
      
   
   
  </div>
)

export default FooterHome
