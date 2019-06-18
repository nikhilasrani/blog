import React, { Component } from "react"
import "./Project.css"

class Project extends Component {
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
        <p className="projectdescription">{this.props.description}</p>
      </div>
     
    </div>

  }
}

export default Project
