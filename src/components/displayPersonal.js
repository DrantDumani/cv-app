import React from "react";
import "../styleSheets/displayPersonal.scss";

function DisplayPersonal({ personalInfo }) {
  const { firstName, lastName, address, email, title, phoneNum, description } =
    personalInfo;

  return (
    <div className="personal-display">
      <div className="personal-header">
        <div className="name-title-container">
          <p className="name">
            {firstName} {lastName}
          </p>
          <p className="position">{title}</p>
        </div>
        <div className="contact-container">
          <p>Address: {address}</p>
          <p>Email: {email}</p>
          <p>Phone: {phoneNum}</p>
        </div>
      </div>
      <div className="about">
        <p className="section-title">About Me</p>
        <hr />
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default DisplayPersonal;
