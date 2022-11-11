import './App.css';
import React, {Component} from "react"
import Header from './components/header';
import CVForm from './components/cvForm';
import Footer from './components/footer';

class App extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="content">
        <Header />
        <CVForm />
        <Footer />
      </div>
    )
  }
}

export default App;
