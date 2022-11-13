import React, {Component} from "react";

class DisplayPersonal extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {firstName, lastName, address, email, title, phoneNum, fieldIds} = this.props.personalInfo

        return (
            <div>
                <h2>{firstName} {lastName}</h2>
                <h3>{title}</h3>
                <p>{address}</p>
                <p>{email}</p>
                <p>{phoneNum}</p>
            </div>
        )
    }
}

export default DisplayPersonal