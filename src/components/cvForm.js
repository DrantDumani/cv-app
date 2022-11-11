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
            <form id="cvForm">
                <Personal />
                <Experience />
                <Education />
            </form>
        )
    }
}

export default CVForm