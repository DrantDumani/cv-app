import React, {Component} from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

class CVForm extends Component {
    constructor(props){
        super(props)
    }

    displayFields = (arr) => {

    }

    render(){
        const {personalInfo, onChangePersonal, experienceArr, educationArr} = this.props

        return (
            <form id="cvForm">
                <Personal personal={personalInfo} handleChange={onChangePersonal}/>
                <ul className="experience-list">
                    {experienceArr.map((el) => { return (
                        <li key={el.id}>
                            <Experience experience={el}/>
                        </li>)
                    })}
                </ul>
                <ul className="education-list">
                    {educationArr.map((el) => { return (
                        <li key={el.id}>
                            <Education education={el}/>
                        </li>)
                    })}
                </ul>
            </form>
        )
    }
}

export default CVForm