import React, {Component} from "react";
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import DisplayPersonal from "./displayPersonal";

class DisplayCV extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="cv-display">
                <DisplayPersonal/>
                <DisplayExperience/>
                <DisplayEducation/>
            </div>
        )
    }
}

export default DisplayCV