import React from "react";
import "../styleSheets/displayExperience.scss";

function DisplayExperience({ exp }) {
  const { position, employer, location, from, to } = exp;

  return (
    <div className="exp-section">
      <div className="exp-info">
        <p className="bolded-text position-text">{position}</p>
        <p className="employer-text">
          {employer}, {location}
        </p>
      </div>
      <div className="time-period-info">
        <p>
          {from} - {to}
        </p>
      </div>
    </div>
  );
}

export default DisplayExperience;
