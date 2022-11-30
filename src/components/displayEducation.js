import React from "react";
import "../styleSheets/displayEducation.scss";

function DisplayEducation({ edu }) {
  const { university, degree, location, from, to } = edu;

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

export default DisplayEducation;
