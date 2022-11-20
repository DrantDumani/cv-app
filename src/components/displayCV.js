import React, { Component } from "react";
import DisplayEducation from "./displayEducation";
import DisplayExperience from "./displayExperience";
import DisplayPersonal from "./displayPersonal";
import "../styleSheets/displayCV.scss";

class DisplayCV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, educationArr, experienceArr, toggleEdit } =
      this.props;

    return (
      <div id="cv-display">
        <DisplayPersonal personalInfo={personalInfo} />
        <ul>
          {experienceArr.map((el) => {
            return (
              <li key={el.id}>
                <DisplayExperience exp={el} />
              </li>
            );
          })}
        </ul>
        <ul>
          {educationArr.map((el) => {
            return (
              <li key={el.id}>
                <DisplayEducation edu={el} />
              </li>
            );
          })}
        </ul>
        <button onClick={toggleEdit}>Edit CV</button>
      </div>
    );
  }
}

export default DisplayCV;
