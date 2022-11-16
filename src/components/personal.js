import React, { Component } from "react";
import "../styleSheets/personal.scss";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, title, email, phoneNum, address, fieldIds } =
      this.props.personal;
    const [firstNameId, lastNameId, titleId, phoneNumId, addressId, emailId] =
      fieldIds;
    const { handleChange, handleValidity, validityStates } = this.props;

    const {
      fNameValidity,
      lNameValidity,
      emailValidity,
      addressValidity,
      titleValidity,
      phoneValidity,
    } = validityStates;

    return (
      <fieldset className="form-fieldset personal">
        <legend>Personal</legend>
        <div>
          <label htmlFor={firstNameId}>First Name: </label>
          <input
            value={firstName}
            id={firstNameId}
            onChange={handleChange}
            required
            title="Please enter a first name"
            placeholder="Billy"
            onBlur={(e) => {
              handleValidity(e, "fNameValidity");
            }}
          />
          {fNameValidity ? null : <p>Please enter a first name</p>}
        </div>
        <div>
          <label htmlFor={lastNameId}>Last Name: </label>
          <input
            value={lastName}
            id={lastNameId}
            onChange={handleChange}
            required
            title="Please enter a last name"
            placeholder="Bob Johns"
            onBlur={(e) => {
              handleValidity(e, "lNameValidity");
            }}
          />
          {lNameValidity ? null : <p>Please enter a last name</p>}
        </div>
        <div>
          <label htmlFor={titleId}>Title: </label>
          <input
            value={title}
            id={titleId}
            onChange={handleChange}
            required
            placeholder="Sr. Developer"
            onBlur={(e) => {
              handleValidity(e, "titleValidity");
            }}
          />
          {titleValidity ? null : <p>Please enter a title</p>}
        </div>
        <div>
          <label htmlFor={emailId}>Email: </label>
          <input
            value={email}
            id={emailId}
            onChange={handleChange}
            type="email"
            required
            title="Please enter a valid email address"
            placeholder="name@example.com"
            onBlur={(e) => {
              handleValidity(e, "emailValidity");
            }}
          />
          {emailValidity ? null : <p>Please enter a valid email address</p>}
        </div>
        <div>
          <label htmlFor={addressId}>Address: </label>
          <input
            value={address}
            id={addressId}
            onChange={handleChange}
            required
            title="Please enter an address"
            placeholder="123 Fake Street"
            onBlur={(e) => {
              handleValidity(e, "addressValidity");
            }}
          />
          {addressValidity ? null : <p>Please enter an address</p>}
        </div>
        <div>
          <label htmlFor={phoneNumId}>Phone #: </label>
          <input
            value={phoneNum}
            id={phoneNumId}
            onChange={handleChange}
            type="tel"
            required
            placeholder="333-333-3333"
            onBlur={(e) => {
              handleValidity(e, "phoneValidity");
            }}
          />
          {phoneValidity ? null : <p>Please enter a contact number</p>}
        </div>
      </fieldset>
    );
  }
}

export default Personal;
