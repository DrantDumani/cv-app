import React, { Component } from "react";
import Education from "./education";
import Experience from "./experience";
import Personal from "./personal";

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validityStates: {
        fNameValidity: true,
        lNameValidity: true,
        titleValidity: true,
        addressValidity: true,
        emailValidity: true,
        phoneValidity: true,
      },
    };
  }

  handleValidity = (e, propStr) => {
    if (e.target.checkValidity()) {
      this.setState((prevState) => ({
        validityStates: {
          ...this.state.validityStates,
          [propStr]: true,
        },
      }));
    } else {
      this.setState({
        validityStates: {
          ...this.state.validityStates,
          [propStr]: false,
        },
      });
    }
  };

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

    const { validityStates } = this.state;

    return (
      <form
        id="cvForm"
        onSubmit={(e) => {
          e.preventDefault();
          toggleEdit();
        }}
      >
        <Personal
          personal={personalInfo}
          handleChange={onChangePersonal}
          handleValidity={this.handleValidity}
          validityStates={validityStates}
        />
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
