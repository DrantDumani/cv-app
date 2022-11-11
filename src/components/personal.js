import React, {Component} from "react";

class Personal extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {firstName, lastName, title, email, phoneNum, address, fieldIds} = this.props.personal
        const [firstNameId, lastNameId, titleId, phoneNumId, addressId, emailId] = fieldIds
        const {handleChange} = this.props
        return (
            <div>
                <div>
                    <label htmlFor={firstNameId}>First Name: </label>
                    <input value={firstName} id={firstNameId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor={lastNameId}>Last Name: </label>
                    <input value={lastName} id={lastNameId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor={titleId}>Title: </label>
                    <input value={title} id={titleId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor={emailId}>Email: </label>
                    <input value={email} id={emailId} onChange={handleChange} type="email" />
                </div>
                <div>
                    <label htmlFor={addressId}>Address: </label>
                    <input value={address} id={addressId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor={phoneNumId}>Phone #: </label>
                    <input value={phoneNum} id={phoneNumId} onChange={handleChange} type="tel"/>
                </div>
            </div>
        )
    }
}

export default Personal