import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleDelete } = this.props;
    const { position, employer, from, to, id, fieldIds } =
      this.props.experience;
    const [positionId, employerId, fromId, toId] = fieldIds;

    return (
      <div>
        <div>
          <label htmlFor={`${positionId}${id}`}>Position: </label>
          <input
            value={position}
            id={`${positionId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor={`${employerId}${id}`}>Employer: </label>
          <input
            value={employer}
            id={`${employerId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor={`${fromId}${id}`}>From: </label>
          <input
            value={from}
            id={`${fromId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor={`${toId}${id}`}>To: </label>
          <input
            value={to}
            id={`${toId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
          />
        </div>
        <button
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
