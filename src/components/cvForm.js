import React, {Component} from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

class CVForm extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Personal />
                <Experience />
                <Education />
            </div>
        )
    }
}

export default CVForm