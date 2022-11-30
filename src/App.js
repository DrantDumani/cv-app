import "./styleSheets/App.scss";
import React, { useState } from "react";
import Header from "./components/header";
import CVForm from "./components/cvForm";
import Footer from "./components/footer";
import DisplayCV from "./components/displayCV";
import uniqid from "uniqid";

function App() {
  const [state, setState] = useState({
    personal: {
      firstName: "",
      lastName: "",
      title: "",
      phoneNum: "",
      address: "",
      email: "",
      description: "",
      fieldIds: [
        "firstName",
        "lastName",
        "title",
        "phoneNum",
        "address",
        "email",
        "description",
      ],
    },
    education: {
      university: "",
      location: "",
      degree: "",
      from: "",
      to: "",
      id: uniqid(),
      fieldIds: ["university", "location", "degree", "from", "to"],
    },
    educationList: [
      {
        university: "",
        location: "",
        degree: "",
        from: "",
        to: "",
        id: uniqid(),
        fieldIds: ["university", "location", "degree", "from", "to"],
      },
    ],
    experience: {
      position: "",
      employer: "",
      location: "",
      from: "",
      to: "",
      id: uniqid(),
      fieldIds: ["position", "employer", "location", "from", "to"],
    },
    experienceList: [
      {
        position: "",
        employer: "",
        location: "",
        from: "",
        to: "",
        id: uniqid(),
        fieldIds: ["position", "employer", "location", "from", "to"],
      },
    ],
    isBeingEdited: true,
  });

  const toggleEdit = () => {
    setState({ ...state, isBeingEdited: !state.isBeingEdited });
  };

  const addEducation = () => {
    setState((prevState) => {
      return {
        ...prevState,
        educationList: prevState.educationList.concat(prevState.education),
        education: { ...prevState.education, id: uniqid() },
      };
    });
  };

  const addExperience = () => {
    setState((prevState) => {
      return {
        ...prevState,
        experienceList: prevState.experienceList.concat(prevState.experience),
        experience: { ...prevState.experience, id: uniqid() },
      };
    });
  };

  const delEducation = (id) => {
    setState({
      ...state,
      educationList: state.educationList.filter((edu) => {
        return edu.id !== id;
      }),
    });
  };

  const delExperience = (id) => {
    setState({
      ...state,
      experienceList: state.experienceList.filter((exp) => {
        return exp.id !== id;
      }),
    });
  };

  const onChangePersonal = (e) => {
    const field = e.target.id;
    setState({
      ...state,
      personal: {
        ...state.personal,
        [field]: e.target.value,
      },
    });
  };

  const onChangeExperience = (e, id) => {
    const field = e.target.id.split(id)[0];
    setState({
      ...state,
      experienceList: state.experienceList.map((exp) => {
        if (exp.id === id) {
          exp[field] = e.target.value;
        }
        return exp;
      }),
    });
  };

  const onChangeEducation = (e, id) => {
    const field = e.target.id.split(id)[0];
    setState({
      ...state,
      educationList: state.educationList.map((edu) => {
        if (edu.id === id) {
          edu[field] = e.target.value;
        }
        return edu;
      }),
    });
  };

  return (
    <div className="content">
      <Header />
      <main>
        {state.isBeingEdited ? (
          <CVForm
            personalInfo={state.personal}
            experienceArr={state.experienceList}
            educationArr={state.educationList}
            addExp={addExperience}
            addEdu={addEducation}
            toggleEdit={toggleEdit}
            onChangePersonal={onChangePersonal}
            onChangeExperience={onChangeExperience}
            onChangeEducation={onChangeEducation}
            delExp={delExperience}
            delEdu={delEducation}
          />
        ) : (
          <DisplayCV
            personalInfo={state.personal}
            experienceArr={state.experienceList}
            educationArr={state.educationList}
            toggleEdit={toggleEdit}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
