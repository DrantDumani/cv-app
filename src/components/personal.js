import React from "react";
import "../styleSheets/personal.scss";

function Personal({ handleChange, handleValidity, validityStates, personal }) {
  const {
    firstName,
    lastName,
    title,
    email,
    phoneNum,
    address,
    description,
    fieldIds,
  } = personal;

  const [
    firstNameId,
    lastNameId,
    titleId,
    phoneNumId,
    addressId,
    emailId,
    descriptionId,
  ] = fieldIds;

  const {
    fNameValidity,
    lNameValidity,
    emailValidity,
    addressValidity,
    titleValidity,
    phoneValidity,
    descriptionValidity,
  } = validityStates;

  return (
    <div className="per-input-container">
      <div className="label-field-pair">
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
        {fNameValidity ? null : (
          <p className="validity-text">Please enter a first name</p>
        )}
      </div>
      <div className="label-field-pair">
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
        {lNameValidity ? null : (
          <p className="validity-text">Please enter a last name</p>
        )}
      </div>
      <div className="label-field-pair">
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
        {titleValidity ? null : (
          <p className="validity-text">Please enter a title</p>
        )}
      </div>
      <div className="label-field-pair">
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
        {emailValidity ? null : (
          <p className="validity-text">Please enter a valid email address</p>
        )}
      </div>
      <div className="label-field-pair">
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
        {addressValidity ? null : (
          <p className="validity-text">Please enter an address</p>
        )}
      </div>
      <div className="label-field-pair">
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
        {phoneValidity ? null : (
          <p className="validity-text">Please enter a contact number</p>
        )}
      </div>
      <div className="label-field-pair">
        <label htmlFor={descriptionId}>Description: </label>
        <textarea
          value={description}
          id={descriptionId}
          onChange={handleChange}
          required
          placeholder="Tell us about yourself in 500 characters or less"
          maxLength={500}
          onBlur={(e) => {
            handleValidity(e, "descriptionValidity");
          }}
        ></textarea>
        {descriptionValidity ? null : (
          <p className="validity-text">Please type a description</p>
        )}
      </div>
    </div>
  );
}

export default Personal;
