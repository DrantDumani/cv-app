import React, { Component } from "react";
import "../styleSheets/displayPersonal.scss";

class DisplayPersonal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, address, email, title, phoneNum, fieldIds } =
      this.props.personalInfo;

    return (
      <div className="personal-display">
        <div className="name-title-container">
          <p className="name">
            {firstName} {lastName}
          </p>
          <p className="position">{title}</p>
        </div>
        <div className="contact-container">
          <p>{address}</p>
          <p>{email}</p>
          <p>{phoneNum}</p>
        </div>
      </div>
    );
  }
}

export default DisplayPersonal;
