import React, {Component} from "react";

class DisplayEducation extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {university, degree, location, from, to} = this.props.edu
        return (
            <div>
                <p>{university}, {location}</p>
                <p>{degree}</p>
                <p>{from} - {to}</p>
            </div>
        )
    }
}

export default DisplayEducation