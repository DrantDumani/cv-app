import React from "react";
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import DisplayPersonal from "./displayPersonal";
import "../styleSheets/displayCV.scss";

function DisplayCV({ personalInfo, educationArr, experienceArr, toggleEdit }) {
  return (
    <div className="display-content">
      <div id="cv-display">
        <DisplayPersonal personalInfo={personalInfo} />
        <div className="section">
          <p className="section-title">Experience</p>
          <hr />
          <ul>
            {experienceArr.map((el) => {
              return (
                <li key={el.id}>
                  <DisplayExperience exp={el} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="section">
          <p className="section-title">Education</p>
          <hr />
          <ul>
            {educationArr.map((el) => {
              return (
                <li key={el.id}>
                  <DisplayEducation edu={el} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button id="edit-CV" onClick={toggleEdit}>
        Edit CV
      </button>
    </div>
  );
}

export default DisplayCV;
