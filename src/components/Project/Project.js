import React, { Component } from "react"
import "./Project.css"

class Project extends Component {

  playStoreLink = () => {
    if(this.props.android)
     {
       return <a href={this.props.playStoreURL}>
         <img style={{height:60, width:150}} src={require("../../images/google-play-badge.png")} alt="Play Store Badge"/>
         </a>
 } 
}
  render() {
    return <div className="project w-container">
       <div className="projectimagebg">
      <img
              src={this.props.imageURL}
              alt={this.props.imageURLAlt}
              className="projectimage w-inline-block"
            />
      </div>
      <div className="projectinfo">
        <p className="projecttitle">{this.props.title}</p>
        <p className="projectdates">{this.props.subtitle}</p>
        <p className="projectdescription">{this.props.description}
        <br/><br/>{this.playStoreLink()}
        </p>
      </div>
     
    </div>

  }
}

export default Project
