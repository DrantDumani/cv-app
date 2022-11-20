import "./styleSheets/App.scss";
import React, { Component } from "react";
import Header from "./components/header";
import CVForm from "./components/cvForm";
import Footer from "./components/footer";
import DisplayCV from "./components/displayCV";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
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
      educationList: [],
      experience: {
        position: "",
        employer: "",
        from: "",
        to: "",
        id: uniqid(),
        fieldIds: ["position", "employer", "from", "to"],
      },
      experienceList: [],
      isBeingEdited: true,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      isBeingEdited: !prevState.isBeingEdited,
    }));
  };

  addEducatuon = () => {
    this.setState({
      educationList: this.state.educationList.concat(this.state.education),
      education: { ...this.state.education, id: uniqid() },
    });
  };

  addExperience = () => {
    this.setState({
      experienceList: this.state.experienceList.concat(this.state.experience),
      experience: { ...this.state.experience, id: uniqid() },
    });
  };

  delEducation = (id) => {
    this.setState((prevState) => ({
      educationList: prevState.educationList.filter((edu) => {
        return edu.id !== id;
      }),
    }));
  };

  delExperience = (id) => {
    this.setState((prevState) => ({
      experienceList: prevState.experienceList.filter((exp) => {
        return exp.id !== id;
      }),
    }));
  };

  onChangePersonal = (e) => {
    const field = e.target.id;
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [field]: e.target.value,
      },
    }));
  };

  onChangeExperience = (e, id) => {
    const field = e.target.id.split(id)[0];
    this.setState((prevState) => ({
      experienceList: prevState.experienceList.map((exp) => {
        if (exp.id === id) {
          exp[field] = e.target.value;
        }
        return exp;
      }),
    }));
  };

  onChangeEducation = (e, id) => {
    const field = e.target.id.split(id)[0];
    this.setState((prevState) => ({
      educationList: prevState.educationList.map((exp) => {
        if (exp.id === id) {
          exp[field] = e.target.value;
        }
        return exp;
      }),
    }));
  };

  componentDidMount() {
    this.addEducatuon();
    this.addExperience();
  }

  render() {
    const { personal, experienceList, educationList, isBeingEdited } =
      this.state;

    return (
      <div className="content">
        <Header />
        <main>
          {isBeingEdited ? (
            <CVForm
              personalInfo={personal}
              experienceArr={experienceList}
              educationArr={educationList}
              addExp={this.addExperience}
              addEdu={this.addEducatuon}
              toggleEdit={this.toggleEdit}
              onChangePersonal={this.onChangePersonal}
              onChangeExperience={this.onChangeExperience}
              onChangeEducation={this.onChangeEducation}
              delExp={this.delExperience}
              delEdu={this.delEducation}
            />
          ) : (
            <DisplayCV
              personalInfo={personal}
              experienceArr={experienceList}
              educationArr={educationList}
              toggleEdit={this.toggleEdit}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
