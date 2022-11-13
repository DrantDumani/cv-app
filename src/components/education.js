import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleDelete } = this.props;
    const { university, location, degree, from, to, id, fieldIds } =
      this.props.education;
    const [universityId, locationId, degreeId, fromId, toId] = fieldIds;

    return (
      <div>
        <div>
          <label htmlFor={`${universityId}${id}`}>University: </label>
          <input
            value={university}
            id={`${universityId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="List the school or course you were enrolled in"
          />
        </div>
        <div>
          <label htmlFor={`${locationId}${id}`}>Location: </label>
          <input
            value={location}
            id={`${locationId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Location of the institution"
          />
        </div>
        <div>
          <label htmlFor={`${degreeId}${id}`}>Degree: </label>
          <input
            value={degree}
            id={`${degreeId}${id}`}
            onChange={(e) => {
              handleChange(e, id);
            }}
            required
            placeholder="Type of degree or certificate you obtained"
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
            placeholder="Month and year you began the course"
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
            placeholder="Month and year you completed your course"
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

export default Education;
