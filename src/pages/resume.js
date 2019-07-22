import React, {Component} from "react";
import Resume from "../documents/resume.pdf"
class resume extends Component {
render(){
    return <div><a href={Resume}>Download Resume</a></div>
}
}

export default resume;