import React, { Component } from "react";
import "../styleSheets/experience.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleDelete } = this.props;
    const { position, employer, location, from, to, id, fieldIds } =
      this.props.experience;
    const [positionId, employerId, locationId, fromId, toId] = fieldIds;

    return (
      <div className="exp-input-container">
        <div className="label-field-pair">
          <label htmlFor={`${positionId}${id}`}>Position: </label>
          <input
            value={position}
            id={`${positionId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Position held"
          />
        </div>
        <div className="label-field-pair">
          <label htmlFor={`${employerId}${id}`}>Employer: </label>
          <input
            value={employer}
            id={`${employerId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Company name"
          />
        </div>
        <div className="label-field-pair">
          <label htmlFor={`${locationId}${id}`}>Location: </label>
          <input
            value={location}
            id={`${locationId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Company location"
          />
        </div>
        <div className="label-field-pair">
          <label htmlFor={`${fromId}${id}`}>From: </label>
          <input
            value={from}
            id={`${fromId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Month/Year you began working there"
          />
        </div>
        <div className="label-field-pair">
          <label htmlFor={`${toId}${id}`}>To: </label>
          <input
            value={to}
            id={`${toId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Month/Year you resigned"
          />
        </div>
        <button
          className="form-btn"
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
