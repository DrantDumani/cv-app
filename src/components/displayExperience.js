import React, { Component } from "react";
import "../styleSheets/displayExperience.scss";

class DisplayExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { position, employer, from, to } = this.props.exp;
    return (
      <div className="exp-section">
        <div className="exp-info">
          <p className="bolded-text position-text">{position}</p>
          <p className="employer-text">{employer}</p>
        </div>
        <div className="time-period-info">
          <p>
            {from} - {to}
          </p>
        </div>
      </div>
    );
  }
}

export default DisplayExperience;
