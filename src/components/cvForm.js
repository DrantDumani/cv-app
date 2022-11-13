import React, { Component } from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
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
    } = this.props;

    return (
      <form
        id="cvForm"
        onSubmit={(e) => {
          e.preventDefault();
          toggleEdit();
        }}
      >
        <Personal personal={personalInfo} handleChange={onChangePersonal} />
        <ul className="experience-list">
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
        <ul className="education-list">
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
        <button type="submit" className="submit-CV">
          Submit
        </button>
      </form>
    );
  }
}

export default CVForm;
