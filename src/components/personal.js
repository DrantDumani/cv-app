import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fNameValidity: true,
      lNameValidity: true,
      titleValidty: true,
      addressValidity: true,
      emailValidity: true,
      phoneValidity: true,
    };
  }

  handleValidity = (e, propStr) => {
    if (e.target.checkValidity()) {
      this.setState({
        [propStr]: true,
      });
    } else {
      this.setState({
        [propStr]: false,
      });
    }
  };

  render() {
    const {
      fNameValidity,
      lNameValidity,
      emailValidity,
      addressValidity,
      titleValidty,
      phoneValidity,
    } = this.state;

    const { firstName, lastName, title, email, phoneNum, address, fieldIds } =
      this.props.personal;
    const [firstNameId, lastNameId, titleId, phoneNumId, addressId, emailId] =
      fieldIds;
    const { handleChange } = this.props;

    return (
      <div>
        <div>
          <label htmlFor={firstNameId}>First Name: </label>
          <input
            value={firstName}
            id={firstNameId}
            onChange={handleChange}
            required
            title="Please enter a first name"
            onBlur={(e) => {
              this.handleValidity(e, "fNameValidity");
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
            onBlur={(e) => {
              this.handleValidity(e, "lNameValidity");
            }}
          />
          {lNameValidity ? null : <p>Please enter a last name</p>}
        </div>
        <div>
          <label htmlFor={titleId}>Title: </label>
          <input value={title} id={titleId} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor={emailId}>Email: </label>
          <input
            value={email}
            id={emailId}
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor={addressId}>Address: </label>
          <input
            value={address}
            id={addressId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor={phoneNumId}>Phone #: </label>
          <input
            value={phoneNum}
            id={phoneNumId}
            onChange={handleChange}
            type="tel"
            required
          />
        </div>
      </div>
    );
  }
}

export default Personal;
