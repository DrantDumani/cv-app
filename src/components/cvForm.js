import React, { useState } from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";
import "../styleSheets/cvForm.scss";

function CVForm({
  personalInfo,
  onChangePersonal,
  onChangeExperience,
  onChangeEducation,
  experienceArr,
  educationArr,
  addEdu,
  addExp,
  delEdu,
  delExp,
  toggleEdit,
}) {
  const [validityStates, setValidityStates] = useState({
    fNameValidity: true,
    lNameValidity: true,
    titleValidity: true,
    addressValidity: true,
    emailValidity: true,
    phoneValidity: true,
    descriptionValidity: true,
  });

  const handleValidity = (e, propStr) => {
    if (e.target.checkValidity()) {
      setValidityStates((prevValidity) => {
        return {
          ...prevValidity,
          [propStr]: true,
        };
      });
    } else {
      setValidityStates((prevValidity) => {
        return {
          ...prevValidity,
          [propStr]: false,
        };
      });
    }
  };

  return (
    <form
      id="cvForm"
      onSubmit={(e) => {
        e.preventDefault();
        toggleEdit();
      }}
    >
      <fieldset className="form-fieldset">
        <legend className="personal-legend">Personal</legend>
        <Personal
          personal={personalInfo}
          handleChange={onChangePersonal}
          handleValidity={handleValidity}
          validityStates={validityStates}
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <legend className="experience-legend">Experience</legend>
        <ul className="experience-list form-list">
          {experienceArr.map((el) => {
            return (
              <li key={el.id}>
                <Experience
                  experience={el}
                  handleChange={onChangeExperience}
                  handleDelete={delExp}
                />
              </li>
            );
          })}
        </ul>
        <button type="button" className="add-to-exp" onClick={addExp}>
          Add Experience
        </button>
      </fieldset>
      <fieldset className="form-fieldset">
        <legend className="education-legend">Education</legend>
        <ul className="education-list form-list">
          {educationArr.map((el) => {
            return (
              <li key={el.id}>
                <Education
                  education={el}
                  handleChange={onChangeEducation}
                  handleDelete={delEdu}
                />
              </li>
            );
          })}
        </ul>
        <button type="button" className="add-to-edu" onClick={addEdu}>
          Add Education
        </button>
      </fieldset>
      <button type="submit" id="submit-CV">
        Submit
      </button>
    </form>
  );
}

export default CVForm;
