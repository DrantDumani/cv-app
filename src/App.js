import './App.css';
import React, {Component} from "react"
import Header from './components/header';
import CVForm from './components/cvForm';
import Footer from './components/footer';
import DisplayCV from './components/displayCV';
import uniqid from "uniqid";

class App extends Component {
  constructor(){
    super()

    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        title: "",
        phoneNum:"",
        address: "",
        email: "",
        fieldIds: ["firstName", "lastName", "title", "phoneNum", "address", "email"]
      },
      education: {
        university: "",
        location: "",
        degree: "",
        from: "",
        to: "",
        id: uniqid(),
      },
      educationList: [],
      experience: {
        position: "",
        employer: "",
        from: "",
        to: "",
        id: uniqid()
      },
      experienceList: [],
      isBeingEdited: true,
    }
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      isBeingEdited: !prevState.isBeingEdited
    }))
  }

  addEducatuon = () => {
    this.setState({
      educationList: this.state.educationList.concat(this.state.education)
    })
  }

  addExperience = () => {
    this.setState({
      experienceList: this.state.experienceList.concat(this.state.experience)
    })
  }

  onChangePersonal = (e) => {
    const field = e.target.id;
    this.setState(prevState => ({
      personal: {
        ...prevState.personal,
        [field]: e.target.value
      }
    }))
  }

  componentDidMount(){
    this.addEducatuon();
    this.addExperience();
  }

  render(){
    const {personal, education, experience, experienceList, educationList, 
      isBeingEdited } = this.state; 

    return (
      <div className="content">
        <Header />
        {isBeingEdited ? 
        <CVForm personalInfo={personal} education={education} experience={experience}
        experienceArr={experienceList} educationArr={educationList} addExp={this.addExperience}
        addEdu={this.addEducatuon} toggleEdit={this.toggleEdit} onChangePersonal={this.onChangePersonal}/>
        :
        <DisplayCV/>
        }
        <Footer />
      </div>
    )
  }
}

export default App;
