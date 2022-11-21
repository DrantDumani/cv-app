import React, { Component } from "react";
import "../styleSheets/displayEducation.scss";

class DisplayEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { university, degree, location, from, to } = this.props.edu;
    return (
      <div className="edu-section">
        <div className="edu-info">
          <p className="bolded-text">{degree}</p>
          <p className="university-text">
            {university}, {location}
          </p>
        </div>
        <p className="time-period-info">
          {from} - {to}
        </p>
      </div>
    );
  }
}

export default DisplayEducation;
