import React, {Component} from "react";
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import DisplayPersonal from "./displayPersonal";

class DisplayCV extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {personalInfo, educationArr, experienceArr, toggleEdit} = this.props

        return (
            <div className="cv-display">
                <DisplayPersonal personalInfo={personalInfo}/>
                <ul>
                    {experienceArr.map((el) => {
                        return (
                            <li key={el.id}>
                                <DisplayExperience exp={el}/>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {educationArr.map((el) => {
                        return (
                            <li key={el.id}>
                                <DisplayEducation edu={el}/>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={toggleEdit}>Edit CV</button>
            </div>
        )
    }
}

export default DisplayCV