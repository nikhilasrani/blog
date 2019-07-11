import React, {Component} from "react";
import Resume from "../documents/Resume_NikhilAsrani.pdf"
class resume extends Component {
render(){
    return <div><a href={Resume}>Download Resume</a></div>
}
}

export default resume;