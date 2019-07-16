import React, { Component } from "react"
import "./Project.css"
import { FaGithub } from "react-icons/fa"

class Project extends Component {

  playStoreLink = () => {
    if(this.props.playStore)
     {
       return <a href={this.props.playStore}>
         <img style={{height:60, width:150}} src={require("../../images/google-play-badge.png")} alt="Play Store Badge"/>
         </a>
 } 
}
githubLink = () => {
  if(this.props.github){
    return <a href={this.props.github}><FaGithub size={30} color="#333"/></a>
  }
}
demoLink = () => {
  if(this.props.demo){
    return <a className="demo-button" href={this.props.demo}>View Demo</a>
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
        <br/><br/>{this.playStoreLink()}{this.githubLink()}{" "}{this.demoLink()}
        </p>
      </div>
     
    </div>

  }
}

export default Project
